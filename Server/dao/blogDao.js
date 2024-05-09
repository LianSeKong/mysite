const blogModel = require('./model/blogModel')
module.exports.addBlogDao = async (data) => {
    const { dataValues } = await blogModel.create(data)
    return dataValues;
}


module.exports.findAllBlogDao = async () => { 
    return await blogModel.findAll();
}

module.exports.findBlogByPageDao = async () => { 
    return await blogModel.findAll();
}