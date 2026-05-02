const express = require('express');
const app = express();


const logger = require('./logging_middleware/logger');
app.use(logger);

app.use(express.json());


const routes = require('./notification_app_be/routes');
app.use('/api', routes);


app.get('/', (req, res) => {
    res.send("Backend is running successfully");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});