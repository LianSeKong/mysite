const projectModel = require('./model/projectModel');


module.exports.findAllProjectDao = async () => {
    return await projectModel.findAll()
}

module.exports.createProjectDao = async (data) => {
    return await projectModel.create(data)

}

module.exports.findProjectByIdDao = async (id) => {
    return await projectModel.findByPk(id)
}

module.exports.updateProjectDao = async (id, data) => {
    await projectModel.update( data, {
        where: {
            id
        }
    });
    return await projectModel.findByPk(id)
}


module.exports.deleteProjectDao = async (id) => {
 return await projectModel.destroy({
        where: {
            id
        }
    })   
}