const messageModel = require('./model/messageModel')
const { Op } = require('sequelize')
module.exports.createMessageDao = async (data) => {
    return await messageModel.create(data)
}

module.exports.findMessageByPageDao = async (queryInfo) => {
    if (queryInfo.blogId)  {
        if (queryInfo.blogId === "all") {
          return await messageModel.findAndCountAll({
                offset: (queryInfo.page * 1 - 1) * queryInfo.limit,
                limit: +queryInfo.limit,
                where: {
                    blogId: {
                        [Op.ne]: null
                    }
                },
                include: [
                    {
                        model: blogModel,
                        as: 'blog'
                    }
                ],
                order: ["createDate", "DESC"]
            })


        } else {
            return await messageModel.findAndCountAll({
                offset: (queryInfo.page * 1 - 1) * queryInfo.limit,
                limit: +queryInfo.limit,
                where: {
                    blogId: +queryInfo.blogId
                },
                order: ["createDate", "DESC"]
            })
        }

    }  else {
        messageModel.findAndCountAll({
            offset: (queryInfo.page * 1 - 1) * queryInfo.limit,
            limit: +queryInfo.limit,
            where: {
                blogId: null
            },
            order: ["createDate", "DESC"]
        })
    }
}