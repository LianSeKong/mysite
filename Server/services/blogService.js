const validate = require('validate.js');
const { updateArticleCountDao  } = require('../dao/blogTypeDao');
const blogTypeModel = require('../dao/model/blogTypeModel');
const { findBlogTypeModelByIdDao} = require('../dao/blogTypeDao')
const { addBlogDao, findAllBlogDao, findBlogByPageDao, findSingBlogDao, modifyBlogDao, deleteBlogDao } = require('../dao/blogDao');
const { formatResponse, handleDataPattern, handleToc } = require('../utils/tool');
const { ValidationError } = require('../utils/errors')
// Extended validation rule 
validate.validators.categoryIdIsExist = (id) => {
    const blogTypeInfo = blogTypeModel.findByPk(id)
    if (blogTypeInfo) {
        return true;
    }
    return 'categoryId is not exist';
}


module.exports.addBlogService = async ( data ) => {
     // 处理TOC
    handleToc(data)
   
    // 转化为字符串



    // 处理文章的其他信息
    // 初始化为0
    data.scanNumber = 0;    // The number of reads is initialized to 0
    data.commentNumber = 0; // The number of comments is initialized to 0

    // 验证规则
    const rules = {
        title: {
            presence: true,
            type: 'string',
        },
        description: {
            presence: true,
            type: 'string',
        },
        toc: {
            presence: true,
            type: 'string',
        },
        createDate: {
            presence: {
                allowEmpty: false,
            },
            type: 'interger',
        },

        categoryId: {
            presence: true,
            type: 'interger',
            categoryIdIsExist: true
        }
    }

    try {
        // deal async rules
        // await validate.async(data.categoryId, rules);
        // call data level 
        const result = await addBlogDao(data);
        // deal blogType 
        await updateArticleCountDao(data.categoryId);
        return formatResponse(
            {
                code: 200,
                msg: '成功', 
                data: result
            }
        )
    } catch (error) {
        // No pass the verification
        throw new ValidationError("数据验证失败" + error);
    }
}


module.exports.findAllBlogService = async () => {

    const data = await findAllBlogDao();

    return formatResponse(
        {
            code: 200,
            msg: '查询成功',
            data
        }
    )
}


module.exports.findBlogByPageService = async (query) => {
    // deal query 
    if (Object.keys(query).length == 0) {
        return await this.findAllBlogService()
    }
    const data = await findBlogByPageDao(query)
    
    return handleDataPattern(data)
}


module.exports.findSingBlogService = async (id, authorization) => {
    const data = await findSingBlogDao(id);
    data.dataValues.toc = JSON.parse(data.dataValues.toc);
    if (!authorization) {
        data.scanNumber++;
        await data.save();
    }
    return formatResponse(
        {
            code: 200,
            message: '',
            data: data.dataValues

        })
}


module.exports.modifyBlogService = async (id, data) => {
    return await modifyBlogDao(+id, data);
}


module.exports.deleteBlogService = async (id) => {
    const data = await findSingBlogDao(id);
    const blogTypeData = await findBlogTypeModelByIdDao(data.dataValues.categoryId)
    blogTypeData.articleCount--;
    await blogTypeData.save();
    return formatResponse(
        {
            code: 200,
            message: '',
            data: await deleteBlogDao(+id)
        })
}