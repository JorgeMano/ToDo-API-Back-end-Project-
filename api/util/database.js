const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
//console.log(process.env);

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    dialect: 'postgres'
});

module.exports = { sequelize };