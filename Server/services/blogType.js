const { validate }= require('validate.js');
const { createBlogTypeDao, deleteBlogTypeDao, findBlogTypeModelAllDao, findBlogTypeModelByIdDao, updateBlogTypeDao } = require('../dao/blogTypeDao')

const { formatResponse } = require('../utils/tool.js');
const { ValidationError } = require('../utils/errors')


module.exports.findAllService = async () => {
    const data = await findBlogTypeModelAllDao()

    return formatResponse(
        {
            code: 200,
            msg: '查询成功',
            data
        }
    )
}

module.exports.findByIdService = async (id) => {
    if (validate.isEmpty(id) || !validate.isInteger(Number(id))) {
        throw new ValidationError('参数类型错误！')
    }
    return formatResponse(
        {
            code: 200,
            msg: '成功', 
            data: await findBlogTypeModelByIdDao(id)
        }
    )
}

module.exports.createService = async (data) => {
    const {name, order } = data;
    if (validate.isEmpty(name) || !validate.isString(name)) {
        throw new ValidationError('参数类型错误！')
    }

    if (validate.isEmpty(order) || !validate.isString(order)) {
        throw new ValidationError('参数类型错误！')
    }



    const { dataValues } = await createBlogTypeDao({ name, order, articleCount: 0 })
    return formatResponse(
        {
            code: 200,
            msg: '新增成功', 
            data: dataValues
        }
    )
}



module.exports.updateService = async (id, body ) => {
    const { name, order, articleCount } = body;
    const data = {}

    if (validate.isEmpty(name) || !validate.isString(name)) {
        throw new ValidationError('参数类型错误！')
    } else {
        data.name = name
    }



    if (validate.isEmpty(order) || !validate.isString(order)) {
        throw new ValidationError('参数类型错误！')
    }else {
        data.order = order
    }

    if (validate.isEmpty(articleCount) || !validate.isInteger(Number(articleCount))) {
        throw new ValidationError('参数类型错误！')
    } else {
        data.articleCount = articleCount
    }
    const res =  await updateBlogTypeDao(id, data)

    return formatResponse(
        {
            code: 200,
            msg: '修改成功', 
            data: res.map(item => item.dataValues)
        }
    )
}


module.exports.deleteService = async (id) => {
    if (validate.isEmpty(id) || !validate.isInteger(Number(id))) {
        throw new ValidationError('参数类型错误！')
    } 
    const res = await deleteBlogTypeDao(id)
    return formatResponse(
        {
            code: 200,
            msg: '删除成功', 
            data: res
        }
    )
}