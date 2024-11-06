import axios from "axios";

// Function to refresh the access token
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios.post("http://localhost:3000/api/token", { token: refreshToken });
    localStorage.setItem("accessToken", response.data.accessToken); // Save the new access token
  } catch (error) {
    console.error("Error refreshing token:", error?.response?.data);
    // Handle token expiration, e.g., log out the user
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login page
  }
};

// Function to call a protected API with access token
export const apiCall = async () => {
  let accessToken = localStorage.getItem("accessToken");
  try {
    // Call the protected API with the access token
    const response = await axios.get("http://localhost:3000/api/protected", {
      headers: { Authorization: Bearer ${accessToken} }, // Proper string interpolation using backticks
    });
    console.log(response.data); // Handle successful API response
  } catch (error) {
    // Check if the error is due to token expiration (401 Unauthorized)
    if (error?.response?.status === 401) {
      await refreshAccessToken(); // Refresh the access token
      accessToken = localStorage.getItem("accessToken"); // Get the new access token
      await apiCall(); // Retry the API call with the new token
    } else {
      console.error("API call error:", error?.response?.data);
    }
  }
};