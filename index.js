const express = require('express');
const app = express();

//  Logging middleware (MUST BE FIRST)
const logger = require('./logging_middleware/logger');
app.use(logger);

app.use(express.json());

//  Import routes
const routes = require('./notification_app_be/routes');
app.use('/api', routes);

//  Basic test route (important for checking)
app.get('/', (req, res) => {
    res.send("Backend is running successfully");
});

//  Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});