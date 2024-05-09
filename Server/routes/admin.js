const express = require('express');
const router = express.Router();
const { formatResponse, parseToken } = require('../utils/tool');
const { loginService, updateAdminService } = require('../services/admin');
const { ValidationError  }  = require('../utils/errors.js') 
/* Login. */
router.post('/login', async function(req, res, next) {
    // 验证码
    if (req.body.captcha.toLowerCase() !== req.session.captcha.toLowerCase()) {
        throw new ValidationError('验证码不正确！')
    }
    const data = await loginService(req.body)
    if (data?.token) {
        res.setHeader('authentication', data.token)
    }
    res.send(formatResponse({
        msg: 'ok',
        code: 200,
        data: data.token
    }))
});


router.get('/whomi', async function(req, res, next) {
    
        const token = parseToken(req.get('Authorization'))
        res.send(formatResponse({
            msg: 'ok',
            code: 200,
            data: token
        }));
    
})


router.put("/", async function(req, res, next) {
    const data = await updateAdminService(req.body)
    console.log(data);
    res.send(data);
})

module.exports = router;
