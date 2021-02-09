// The main reason for doing this is to manage our environment variables 
// in one place. For some reason, we may decide to have multiple .env files. 
// For instance, we may decide to have a separate .env for deployment with docker. 
// We may also have other configuration variables. We would like to manage these 
// variables efficiently that’s why we are following this convention.

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY
};







/* const {
    NODE_ENV,
    DB_DB,
    DB_HOST,
    DB_PORT,
    USERNAME,
    PASSWORD,
    JWT_SECRET,
    SMTP_HOST,
    SMTP_PORT,
    EMAIL_FROM,
    EMAIL_ADDRESS,
    EMAIL_PASSWORD,
  } = process.env; */