// The main reason for doing this is to manage our environment variables 
// in one place. For some reason, we may decide to have multiple .env files. 
// For instance, we may decide to have a separate .env for deployment with docker. 
// We may also have other configuration variables. We would like to manage these 
// variables efficiently that’s why we are following this convention.

const dotenv = require('dotenv');

dotenv.config();

if (dotenv.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }

module.exports = {
    PORT: process.env.PORT,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MONGODB_ATLAS_USER_NAME: process.env.MONGODB_ATLAS_USER_NAME,
    MONGODB_ATLAS_PASSWORD: process.env.MONGODB_ATLAS_PASSWORD
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