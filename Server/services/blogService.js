const validate = require('validate.js');
const { updateArticleCountDao  } = require('../dao/blogTypeDao');
const blogTypeModel = require('../dao/model/blogTypeModel');
const { addBlogDao, findAllBlogDao, findBlogByPageDao } = require('../dao/blogDao');
const { formatResponse } = require('../utils/tool');
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
    data.toc = JSON.stringify({A: 'b'});
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
    console.log(query);
    await findBlogByPageDao(query)

}