require('dotenv').config();

module.exports = {
    get: (key) => process.env[key]
};