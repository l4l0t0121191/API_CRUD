const express = require('express')
const controller  = require('../controllers/user')
const router = express.Router()
const path  = 'user'

router.get(
    `/${path}`,
    controller.getData
)


/**
 * put
 */
router.put(
    `/:id`,
    controller.updateSingle
)

router.delete(
    `/:id`, 
    controller.deleteSingle
)

module.exports = router