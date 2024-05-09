const adminModel = require('./model/adminModel');
module.exports.loginDao = async (loginInfo) => {

    return await adminModel.findOne({
        where: {
            loginId: loginInfo.loginId,
            loginPwd: loginInfo.loginPwd
        }
    })
} 

// only update password and name
module.exports.updateDao = async (where, newVal) => {    
    return await adminModel.update(newVal, {
        where
    })
}