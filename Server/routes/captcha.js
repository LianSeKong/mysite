const express = require('express');
const router = express.Router();
const { getCaptchaService } = require('../services/captcha');

router.post("/", async function(req, res, next) {
    // 生成验证码
    const captcha = await getCaptchaService()
    
    req.session.captcha = captcha.text;

    // res.type('svg')
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data)
})

module.exports = router;
