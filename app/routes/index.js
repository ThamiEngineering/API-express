const packageJson = require('../package.json');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send({
            success: true,
            status: 200,
            message: 'Welcome to the API',
            data: {
                serverStatus: 'online',
                version: packageJson.version
            }
        });
    });
};