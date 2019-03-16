'use strict'

const router = require('express-promise-router')()
const enforce = require('express-sslify')

const isDev = process.env.NODE_ENV === 'development'

// redirect http to https for all requests. useful for our sample deploy.
if (!isDev) {
  router.use(
    enforce.HTTPS({trustProtoHeader: true})
  )
}

exports.preload = router
