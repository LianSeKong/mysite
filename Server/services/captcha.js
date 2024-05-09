const svgCaptcha = require('svg-captcha');


module.exports.getCaptchaService = async (req, res, next) => {
    return svgCaptcha.create({
        size: 4, // size of random string
        ignoreChars: '0o1i', // ignore characters
        noise: 6,   // number of noise lines
        color: true, // characters will have distinct colors instead of grey, true if background option is set
    })
}