const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let campaigns = [];  // You can replace this with a database like MongoDB

app.post('/campaigns', (req, res) => {
  const { name, email, phone, cause, description, image } = req.body;
  const newCampaign = {
    id: campaigns.length + 1,
    name,
    email,
    phone,
    cause,
    description,
    image,
  };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

app.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

app.listen(5000, () => console.log('Server running on port 5000'));
