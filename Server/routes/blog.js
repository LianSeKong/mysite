const express = require('express');
const router = express.Router();
const { addBlogService, findAllBlogService, findBlogByPageService } = require('../services/blogService');
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


});



router.put('/:id', async function(req, res, next) {

});

router.delete('/:id', async function(req, res, next) {
    
});


module.exports = router;