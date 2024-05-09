const { DataTypes }  = require('sequelize')
const sequelize = require('../dbConnect.js');

const fields = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    articleCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    order: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}


// 定义数据模型
module.exports = sequelize.define('blogType', fields, options)
