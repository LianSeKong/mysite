const md5  = require('md5');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const toc = require('markdown-toc');

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



// deal toc 
module.exports.handleToc = (info) => {
    const result = toc(info.markdownContent).json();
    info.toc = transfer(result);
    delete info.markdownContent;


    for (const i of result) {
        let newStr = `<h${i.level} id="#${i.slug}">`;
        info.htmlContent = info.htmlContent.replace(`<h${i.level}>`,  newStr);
    }

    return info
    function createTocItem(item) {
        return {
            name: item.name,
            anchor: item.slug,
            level: item.lvl,
            children: []
        }
    }


    function transfer(flatArr) {
        const stack = [];
        const result = []

        let min = 6;

        for (const item of flatArr) {
           if (item.lvl < min) {
             min = item.lvl
           }
        }
        for (const item of flatArr) {
            const tocItem = createTocItem(item)
            if (tocItem.level === min) {
                result.push(tocItem)
            }
            helper(tocItem)
        }

        return result;


         function helper(tocItem) {
            const current = stack[stack.length - 1]

            if (!current) {
                stack.push(tocItem)
            } else if (tocItem.level > current.level) {
                current.children.push(tocItem)
                stack.push(tocItem)
            } else {
                stack.pop();
                helper(tocItem)
            }
        }
    }

    
}