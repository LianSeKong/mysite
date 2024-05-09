const md5  = require('md5');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

module.exports.formatResponse = function( { code, msg,data }) {
    return {
        code,
        msg,
        data
    }
}

module.exports.parseToken = function(token) {
    return jwt.verify(token.split(' ')[1], md5(process.env.JWT_SIGN))
}

module.exports.handleDataPattern = (data) => {
    const arr = [];

    for (const i of data) {
        arr.push(i.dataValues);
    }
    return arr;
}

// Setting upload engine
// const storage = multer.diskStorage({
//     // file storage dest
//     // destination: function(req, file, cb) {
//     //     cb(null, __dirname + '/../public/static/uploads')
//     // },

//     // setting unique file name
//     filename: function(req, file, cb) {
//         const baseName = path.basename(file.originalname, path.extname(file.originalname));
//         const extName = path.extname(file.originalname); 
//         const newName = baseName + Date.now() + extName
//         cb(null, newName)
//     }
// })

const storage = multer.diskStorage({
     // file storage dest
    destination: function(req, file, cb) {
        cb(null, __dirname + '/../public/static/uploads')
    },
    filename: function(req, file, cb) {
        const baseName = path.basename(file.originalname, path.extname(file.originalname));
        const extName = path.extname(file.originalname); 
        const newName = baseName + Date.now() + extName
        cb(null, newName)
    }
  })
// const upload = multer({
//     storage
// })


const upload = multer({ storage: storage })
// const upload = multer({ dest: 'uploads/' })

module.exports.upload = upload