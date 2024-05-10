// 数据库初始化
const sequelize = require('./dbConnect');
const admin = require('./model/adminModel');
const banner = require('./model/bannerModel');
const blogType = require('./model/blogTypeModel');
const blog = require('./model/blogModel');
const project = require('./model/projectModel');
const md5 = require('md5');
(async () => {

    blogType.hasMany(blog, {foreignKey: 'categoryId', target: 'id'})
    blog.belongsTo(blogType, {foreignKey: 'categoryId', target: 'id', as: 'category'})


    // 同步
    await sequelize.sync({
        alter: true,
    })

    const adminCount = await admin.count();

    if (adminCount === 0) {
        await admin.create({
            loginId: 'admin',
            name: 'superAdmin',
            loginPwd: md5('lpf123456')
        })
        console.log('init admin data finished');
    }

    const bannerCount = await banner.count();

    if (bannerCount === 0) {
        await banner.bulkCreate([
            {
                midImg: '/static/1.jpg',
                bigImg: '/static/1.jpg',
                title: '宁静的下午',
                description: '宁静的下午',
            },
            {
                midImg: '/static/2.jpg',
                bigImg: '/static/2.jpg',
                title: '宁静的下午',
                description: '宁静的下午',
            },
            {
                midImg: '/static/3.jpg',
                bigImg: '/static/3.jpg',
                title: '宁静的下午',
                description: '宁静的下午',
            },
            {
                midImg: '/static/4.png',
                bigImg: '/static/4.png',
                title: '宁静的下午',
                description: '宁静的下午',
            }
        ])
        console.log('banner');
    }



})()