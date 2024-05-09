const express = require('express');
const router = express.Router();
const { findBannerService, updateBannerService } = require('../services/banner')

router.get('/', async function(req, res, next) {
    res.send(await findBannerService())

});

router.post('/', async function(req, res, next) {
    res.send(await updateBannerService(req.body))
});

module.exports = router;