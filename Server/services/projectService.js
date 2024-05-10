const { validate }= require('validate.js');
const { createProjectDao, updateProjectDao, deleteProjectDao, findAllProjectDao, findProjectByIdDao } = require('../dao/projectDao')
const { formatResponse } = require('../utils/tool.js');
const { ValidationError } = require('../utils/errors')


module.exports.findAllProjectService = async () => {
    const data = await findAllProjectDao()
    return formatResponse(
        {
            code: 200,
            msg: '查询成功',
            data
        }
    )
}

module.exports.findProjectByIdService = async (id) => {
    return formatResponse(
        {
            code: 200,
            msg: '成功', 
            data: await findProjectByIdDao(id)
        }
    )
}

module.exports.createProjectService = async (data) => {

    const { dataValues } = await createProjectDao(data)
    return formatResponse(
        {
            code: 200,
            msg: '新增成功', 
            data: dataValues
        }
    )
}



module.exports.updateProjectService = async (id, body ) => {
    const res =  await updateProjectDao(id, body)
    return formatResponse(
        {
            code: 200,
            msg: '修改成功', 
            data: res.map(item => item.dataValues)
        }
    )
}


module.exports.deleteProjectService = async (id) => {

    return formatResponse(
        {
            code: 200,
            msg: '删除成功', 
            data: await deleteProjectDao(id)
        }
    )
}