// test.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/campaigns', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongoose connection successful'))
    .catch(err => console.error('Mongoose connection error:', err));
