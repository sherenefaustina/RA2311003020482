const express = require('express');
const router = express.Router();

router.post('/notify', (req, res) => {
    const { message } = req.body;

    // Simulate notification
    console.log("Notification:", message);

    res.json({ success: true });
});

module.exports = router;