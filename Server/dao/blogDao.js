
const blogModel = require('./model/blogModel')
const blogTypeModel = require('./model/blogTypeModel')
module.exports.addBlogDao = async (data) => {
    const { dataValues } = await blogModel.create(data)
    return dataValues;
}


module.exports.findAllBlogDao = async () => { 
    return await blogModel.findAll();
}

module.exports.findBlogByPageDao = async (query) => { 
    const options = {
        include: {
            model: blogTypeModel,
            as: "category",
        },
        limit: +query.limit,
        offset: +query.limit * (query.page - 1)
    }


    if (query.categoryId != '-1') {
        options.where = {
            categoryId: query.categoryId
        }
    }

    return await blogModel.findAll(options);
}


module.exports.findSingBlogDao = async (id) => { 
    return await blogModel.findByPk(id, {

        include: {
            model: blogTypeModel,
            as: "category",
        }
    })
}


module.exports.modifyBlogDao = async (id, data) => { 
    await blogModel.update(data, {
        where: {
            id
        }
    })
    return await blogModel.findByPk(id)
}

module.exports.deleteBlogDao = async (id) => {
    return await blogModel.destroy({
        where: {
            id
        }
    });
}