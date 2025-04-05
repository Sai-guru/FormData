const express = require('express'); 
const cors = require('cors'); // Import cors package
const app = express();
const PORT = 4000;

app.use(cors({ // Enable CORS for all origins
    origin: 'http://localhost:3000'
}));
app.use(express.json());

const x = require('./db/connection.js');
const User = require('./Models/User.js');

app.post('/details', async (req, res) => {
    const { name, email, instaId } = req.body;

const user = new User({
    name,
    email,
    instaId
});

    console.log("Received data from frontend:", req.body); 
    try {
        let result = await user.save();
        res.status(200).send(result); 
    } catch (error) { 
        console.error('Error saving user:', error); // Corrected log statement
        res.status(500).send('Failed to save user'); // Use status 500 for server errors
    }
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});