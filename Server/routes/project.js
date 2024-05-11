const express = require('express');
const router = express.Router();
const { findAllProjectService, findProjectByIdService, updateProjectService, deleteProjectService, createProjectService } = require('../services/projectService')

router.get('/test/t', async function(req, res, next) {
    res.send(`f(1)`)
})
// get project
router.get('/', async function(req, res, next) {
    res.send(await findAllProjectService())
})

router.get('/:id', async function(req, res, next) {
    res.send(await findProjectByIdService(+req.params.id))
})
// add project

router.post('/', async function(req, res, next) {
    res.send(await createProjectService(req.body))
})




// modify project
router.put('/:id', async function(req, res, next) {
    res.send(await updateProjectService(+req.params.id, req.body))
});



// delete project

router.delete('/:id', async function(req, res, next){
    res.send(await deleteProjectService(+req.params.id))
});



module.exports = router;
