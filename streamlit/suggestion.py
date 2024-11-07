import os
import google.generativeai as genai  # type: ignore
import streamlit as st  # type: ignore

# Load environment variables

API_KEY = "AIzaSyDeW0DQ1im3YofZLg8vRrz-ufbbpPfjHgc"
genai.configure(api_key='AIzaSyDeW0DQ1im3YofZLg8vRrz-ufbbpPfjHgc')


# Function to generate a project description using Gemini
def generate_description(title, goal, amount):
    prompt = (f"Generate a project description for a crowdfunding project titled '{title}'. "
              f"The goal of the project is: '{goal}'. "
              f"The amount to be raised is: '{amount}'.")
    
    model = genai.GenerativeModel("gemini-pro")
    chat = model.start_chat(history=[])

    response = chat.send_message(prompt, stream=True)
    generated_text = ""
    
    for chunk in response:
        generated_text += chunk.text
    
    return generated_text.strip()

# Streamlit app layout
st.title("Crowdfunding Project Description Generator")

# Input fields for user data
project_title = st.text_input("Project Title:")
project_goal = st.text_area("Project Goal/Description:")
amount_to_be_raised = st.number_input("Amount to be Raised:", min_value=0, step=100)

if st.button("Generate Description"):
    if project_title and project_goal and amount_to_be_raised:
        generated_description = generate_description(project_title, project_goal, amount_to_be_raised)
        st.subheader("Generated Description:")
        st.write(generated_description)
    else:
        st.warning("Please fill in all fields to generate a description.")