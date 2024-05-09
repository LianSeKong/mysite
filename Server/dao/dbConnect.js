
const { Sequelize } = require('sequelize')

// 链接数据库

const seq = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    logging: false,
});

// async function toConnection() {
//     try {
//         await seq.authenticate();
//         console.log('mssql authentication successful');``
//     } catch (error) {
//         console.error('error authenticating', error);
//     }
// }
// toConnection()
module.exports = seq

// toConnection()