const express = require('express')
const router = express.Router()
const memberController = require('../controllers/memberController')
const locationController = require('../controllers/locationController')

router.get('/api/members', memberController.index)
router.post('/api/members/', memberController.create)
router.get('/api/members/:memberId', memberController.show)
router.patch('/api/members/:memberId', memberController.update)
router.delete('/api/members/:memberId', memberController.delete)

router.post('/api/members/:memberId/locations', locationController.create)
router.get('/api/locations', locationController.index)
router.get('/api/locations/:locationId', locationController.show)
router.delete('/api/locations/:locationId', locationController.delete)
router.patch('/api/locations/:locationId', locationController.update)


module.exports = router;