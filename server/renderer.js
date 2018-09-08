const fs = require('fs')  // file system
const path = require('path') // path is module in node
// filepath is absolute path(__dirname is present dictory that is server) => index.html for readFilesyc can read files
const filepath = path.resolve(__dirname,'..','public','index.html')
// markup read file index.html
const markup = fs.readFileSync(filepath,'utf-8')

// 1.export function middleware
module.exports = (req,res,next)=>{
    res.send(markup) //When response back , I send markup HTML return
}