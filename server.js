const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Callback endpoint for M-PESA notifications
app.post('/callback', (req, res) => {
    const paymentResponse = req.body;

    // Log the payment response for debugging
    console.log('Payment Response:', paymentResponse);

    // Here you can process the payment notification
    // e.g., update your database or notify the user

    // Send a response back to Safaricom
    res.status(200).send('Received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
