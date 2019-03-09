'use strict'

const md5 = require('md5')
const router = require('express-promise-router')()

router.use(async (req, res) => {
  req.userInfo = {
    email: 'demo.user@example.com',
    userId: '10',
    analyticsUserId: md5('10library')
  }
  
  return 'next';
})

module.exports = router
