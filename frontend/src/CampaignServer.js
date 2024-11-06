const mongoose = require('mongoose');
const readline = require('readline');
const dotenv = require('dotenv');
const Campaign = require('./model/Campaign.js'); // Adjust path as necessary

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect("mongodb+srv://puravahya22:Y19UuF1Ktwwk9uz6@cluster0.kyjwu.mongodb.net/CrowdFundingPlatform?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit on connection failure
});

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions and get user input
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

// Main function to get user input and save to database
const createCampaign = async () => {
    try {
        const name = await askQuestion('Enter your name: ');
        const email = await askQuestion('Enter your email: ');
        const phone = await askQuestion('Enter your phone number: ');
        const cause = await askQuestion('Enter the cause: ');
        const description = await askQuestion('Enter campaign description: ');
        const image = await askQuestion('Enter image URL (optional): '); // Assuming you get the image URL from somewhere

        // Create a new campaign instance
        const newCampaign = new Campaign({
            name,
            email,
            phone,
            cause,
            description,
            image: image || '', // Default to an empty string if no image is provided
        });

        // Save the campaign to the database
        await newCampaign.save();
        console.log('Campaign saved successfully:', newCampaign);
    } catch (err) {
        console.error('Error saving campaign:', err.message);
    } finally {
        mongoose.connection.close(); // Close the connection after operation
        rl.close(); // Close the readline interface
    }
};

// Start the script
createCampaign();