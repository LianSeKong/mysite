const blogTypeModel = require('./model/blogTypeModel');

module.exports.findBlogTypeModelAllDao = async () => {
    return await blogTypeModel.findAll()
}

module.exports.findBlogTypeModelByIdDao = async (id) => {

    return await blogTypeModel.findAll({
        where: {
            id
        }
    })
}



module.exports.updateBlogTypeDao = async (id, data) => {
    await blogTypeModel.update( data, {
        where: {
            id
        }
    });

    return await blogTypeModel.findAll({
        where: {
            id
        }
    })
}


module.exports.createBlogTypeDao = async (data) => {
    return await blogTypeModel.create(data)
}


module.exports.deleteBlogTypeDao = async (id) => {

    return await blogTypeModel.destroy({
        where: {
            id
        }
    });

}