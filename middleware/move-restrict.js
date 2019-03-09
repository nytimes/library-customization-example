'use strict'

const router = require('express-promise-router')()

// this will issue 403s for anyone trying to finish moving a file. This behavior is useful for our sample deploy.
router.get('/move-file', async (req, res) => {
  // disallow requests with dest params
  if (req.query.dest) throw Error('Unauthorized')
  // allow others through
  return 'next'
})

// error functions are special. They have to be attached directly to the app.
exports.preload = router
