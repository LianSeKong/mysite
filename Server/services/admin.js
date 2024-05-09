//  业务逻辑层
const md5 = require('md5');
const { loginDao, updateDao } = require("../dao/adminDao")
const jwt = require('jsonwebtoken');
const { ValidationError } = require('../utils/errors');
const { formatResponse } = require('../utils/tool.js');
module.exports.loginService = async (loginInfo) => {
    loginInfo.loginPwd = md5(loginInfo.loginPwd)
    let data = await loginDao(loginInfo)
    if (data?.dataValues) {
        // 添加Token
        data = data.dataValues
        let expires  = null
        if (loginInfo.remember) {
            expires = parseInt(loginInfo.remember)
        } else {
            expires = 1
        }
        const { id, name, loginId } = data;
        const token = jwt.sign({id, name, loginId}, md5(process.env.JWT_SIGN), { expiresIn: expires * 60 * 60 * 24 })
        return {
            token
        }
    }
    throw new ValidationError('密码错误！')
};


module.exports.updateAdminService = async function(accountInfo ) {
    const {loginId, loginPwd, oldLoginPwd, name} = accountInfo;

    // valiate password
    const adminInfo = await loginDao({
        loginId,
        loginPwd: md5(oldLoginPwd)
    })

    if (adminInfo === null) {
        throw new ValidationError('旧密码错误！')
    } else {
        const newVal = {}
        // modify password
        if (loginPwd) {
            newVal.loginPwd = md5(loginPwd)
        }

        // modify name
        if (name) {
            newVal.name = name
        }

        const where = {
            loginId
        }
        await updateDao(where, newVal)
        return formatResponse(
            {
                code: 200,
                msg: '修改成功', 
                data: {
                    name,
                    loginPwd
                }
            }
        )
    }
}