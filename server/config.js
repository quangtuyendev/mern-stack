const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT || 8000,
    DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/auth-with-jwt',
    JWT_SECRET: process.env.JWT_SECRET || 'your-jwt-secret'
};