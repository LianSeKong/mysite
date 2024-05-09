const express = require('express')
const multer = require('multer')
const { UploadError } = require('../utils/errors')
const { upload, formatResponse } = require('../utils/tool.js') 
const router = express.Router();


router.post('/', function(req, res, next) {
    // 上传控件的name属性
    upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError){
            next(new UploadError('上传文件失败, 请检查文件的大小！'))
        } else {
            const path = '/static/uploads/' + req.file.filename
            res.send(formatResponse({
                code: 200,
                msg: '上传文件成功',
                data: path
            }))
        }
    })
})

module.exports = router;