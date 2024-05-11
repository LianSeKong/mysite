const express = require('express');
const router = express.Router();
const { findMessageByPageService } = require('../services/messageService')



// 根据blogID来区分留言和文章评论

// 进行增删查改


// get Comment or message 
router.get("/", async function(req, res, next) {
    res.send(await findMessageByPageService(req.body));
})

// add Comment or message 
router.post("/", async function(req, res, next){})


// delete Comment or message  留言or评论

router.delete("/", async function(req, res, next) {})

// 分页获取评论或者留言

module.exports = router;