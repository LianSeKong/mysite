const { DataTypes }  = require('sequelize')
const sequelize = require('../dbConnect.js');

const fields = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}


// 定义数据模型
module.exports = sequelize.define('admin', fields, options)
