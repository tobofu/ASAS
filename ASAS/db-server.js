const express = require('express');
const app = express();
const routes = require('./db-router');
const cors = require('cors');
app.get('/', (req, res) => {
    res.send('Welcome to the ASAS API! Please use /api/v1/ASAS to access the API.');
});
const port = 5000
app.use(cors({
    origin: '*'
}));
app.use('/api/v1/ASAS', routes);
app.listen(port, () => console.log(`Listening on port ${port}....`));