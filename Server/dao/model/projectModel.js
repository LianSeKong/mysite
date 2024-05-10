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
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }    
}

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}


// 定义数据模型
module.exports = sequelize.define('project', fields, options)
