const config = require('./helpers/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { logger } = require('./helpers/logger');

const app = express();

const port = config.get('port') || 3000;

app.set('trust proxy', true);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app);

app.get('*', (req, res) => {
    res.send({ success: false, status: 404, message: 'Invalid route', data: {} }, 404);
});

const server = app.listen(port);

logger.info(`Server started on port :${port}`);

module.exports = { app, server };