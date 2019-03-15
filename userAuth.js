'use strict'

const md5 = require('md5')
const router = require('express-promise-router')()

// @TODO: Remove below code block when ready to publish the demo site
const defaultAuth = require('../server/userAuth')
router.use(defaultAuth)
// END @TODO REMOVE BLOCK

router.use(async (req, res) => {
  req.userInfo = {
    email: 'demo.user@example.com',
    userId: '10',
    analyticsUserId: md5('10library')
  }
  
  return 'next'
})

module.exports = router