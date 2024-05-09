const express = require('express')
const router = express.Router()
const { updateService, findAllService, findByIdService, createService , deleteService} = require('../services/blogType')

router.get('/', async function(req, res, next) {
    res.send(await findAllService())
});


router.get('/:id', async function(req, res, next) {
   const { id } = req.params;
    res.send(await findByIdService(id))

});

router.post('/', async function(req, res, next) {
   res.send(await createService(req.body))
});


router.put('/:id', async function(req, res, next) {
   const { id } = req.params;
   res.send(await updateService(id, req.body))
});

router.delete('/:id', async function(req, res, next) {
    const { id } = req.params;
    res.send(await deleteService(id))
});


module.exports = router;