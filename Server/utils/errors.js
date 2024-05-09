const { formatResponse } = require('./tool.js') 
class ServiceError extends Error {

    /**
     * 
     * @param {*} message 错误消息 
     * @param {*} code     错误代码
     */
    constructor(message, code) {
        super(message);
        this.code = code;
    }

    // 方法
    toResponseJSON() {
        return JSON.stringify(formatResponse({
            code: this.code,
            msg: this.message,
            data: null
        }))

    }
}

// 文件上传
exports.UploadError = class  extends ServiceError {

    constructor(message) {
        super(message, 403);
    }

}

// 禁止访问

exports.ForbiddenError = class extends ServiceError {
    constructor(message) {
        super(message, 401);
    }
}

// 验证错误

exports.ValidationError = class  extends ServiceError {
    constructor(message) {
        super(message, 406);
    }
}

// 无资源错误
exports.NotFoundError = class  extends ServiceError {
    constructor() {
        super('not found', 406);
    }
}


// 未知错误

exports.UnknowError = class extends ServiceError {
    constructor() {
        super('server internel error', 500);
    }

}

module.exports.ServiceError = ServiceError;