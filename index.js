#!/usr/bin/env node
const express = require('express')
const app = express()

const args = process.argv.slice(2)
app.set('trust proxy')
app.use((req, res, next) => {
  console.log(req.method, req.path, req.ip)
  next()
})
app.use(express.static(args[0] || __dirname))
app.use((err, req, res, next) => {
  console.error(err || 'Not found')
  res.status(404).send('Not found')
})
app.listen(8080, () => {
  console.log('Listening on port 8080')
})

