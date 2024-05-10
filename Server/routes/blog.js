const express = require('express');
const router = express.Router();
const { addBlogService, findSingBlogService, findBlogByPageService, modifyBlogService, deleteBlogService } = require('../services/blogService');
// add blog 
router.post('/', async function(req, res, next) {
    res.send(await addBlogService(req.body))
     
});



// Get all blog
// router.get('/', async function(req, res, next) {
//     res.send(await findAllBlogService())
// });

// Paging for data

router.get('/', async function(req, res, next) {
    res.send(await findBlogByPageService(req.query));
});

// Get a single blog
router.get('/:id', async function(req, res, next) {
    const { headers } = req
    res.send(await findSingBlogService(req.params.id, headers.authorization));

});


// modify the blog
router.put('/:id', async function(req, res, next) {
    res.send(await modifyBlogService(req.params.id, req.body));
});

router.delete('/:id', async function(req, res, next) {
    res.send(await deleteBlogService(req.params.id));
});


module.exports = router;