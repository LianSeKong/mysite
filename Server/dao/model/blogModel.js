const { DataTypes }  = require('sequelize')
const sequelize = require('../dbConnect.js');

const fields = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    toc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    htmlContent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scanNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    commentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}


// 定义数据模型
module.exports = sequelize.define('blog', fields, options)
