// server1.js
const express = require('express');
const mongoose = require('mongoose');
const Campaign = require('./src/models/Campaign'); // Ensure this path is correct
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const PORT = 5000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true,
  };
  app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campaigns', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json()); // Enable JSON parsing

// POST route to create a new campaign
app.post('/campaigns', async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body);
        const savedCampaign = await newCampaign.save();
        res.status(201).send(savedCampaign);
    } catch (error) {
        console.error('Error saving campaign:', error);
        res.status(500).send({ message: 'An error occurred while saving the campaign.' });
    }
});

// GET route to retrieve all campaigns
app.get('/campaigns', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).send(campaigns);
    } catch (error) {
        console.error('Error retrieving campaigns:', error);
        res.status(500).send({ message: 'An error occurred while retrieving campaigns.' });
    }
});

app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
