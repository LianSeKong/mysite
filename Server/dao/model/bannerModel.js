const { DataTypes }  = require('sequelize')
const sequelize = require('../dbConnect.js');

const fields = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    midImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bigImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
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
module.exports = sequelize.define('banner', fields, options)
