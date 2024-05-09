const validate = require('validate');
const blogTypeModel = require('../dao/blogTypeDao');
validate.validators.categoryIdIsExist = (value) => {
    const blogTypeInfo = blogTypeModel.findByPk(id)
    if (blogTypeInfo) {
        return;
    }
    return 'categoryId is not exist';
}
module.exports.addBlogService = async ( data ) => {
    
    // 处理TOC

    // 转化为字符串

    // 处理文章的其他信息

    // 初始化为0
    data.scanNumber = 0;
    data.commentNumber = 0;

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

}

