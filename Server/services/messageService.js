
const { createMessageDao, findMessageByPageDao } = require('../dao/messageDao')
const { formatResponse } = require('../utils/tool.js');
const { UnknowError } = require('../utils/errors')
const fs = require('fs');
async function readDirLength(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                throw new UnknowError(); 
            }
            resolve(files)
        })

    })
}



module.exports.findMessageByPageService = async (queryInfo) => {
    const data = await findMessageByPageDao(queryInfo)
    return formatResponse(
        {
            code: 200,
            msg: '查询成功',
            data
        }
    )
}

//  findMessageByPageDao

// 头像不存在则去本地头像文件夹寻找头像文件， 随机读取其中一个
module.exports.createMessageService = async (data) => {

    
    if (!data.avatar) {
        const files = await readDirLength('../static/images')
        const randomIndex = Math.floor(Math.random() * files.length)
        data.avatar = `../static/images/${files[randomIndex]}`
    }
    const { dataValues } = await createMessageDao(data)
    // 对应文章下的评论数加一
    
    // TOOD CODE


    return formatResponse(
        {
            code: 200,
            msg: '新增成功', 
            data: dataValues
        }
    )
}





module.exports.deleteMessageService = async (id) => {

    return formatResponse(
        {
            code: 200,
            msg: '删除成功', 
            data: await deleteProjectDao(id)
        }
    )
}