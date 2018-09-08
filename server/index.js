
const express = require('express')
const path = require('path')
const renderer = require('./renderer')

const app =express()
//app.user make middleware and tell express=>make static file in public folder for serving every request
app.use(express.static(path.resolve(__dirname,'..','public')))
// create middleware renderer
app.use(renderer)
app.listen(8000,()=>{
    console.warn('running at http://localhost:8000')
})
