const http = require('http')
const url = require('url')
const fs = require('fs')

const host = 'http://localhost:'
const port = '8081'

const app = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname
  if (req.method === 'GET') {
    if (path === '/posts') {
      fs.readdir('./src/contents', (err, files) => {
        try {
          const list = {}
          files.forEach((file) => {
            const isMd = file.includes('md')
            if(isMd) list[file] = file            
          })
          res.writeHead(200, {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://localhost:8081'
          })
          res.write(JSON.stringify(list))
          res.end()
        } catch (err) {
          console.log(err)
        }
      })
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/html, charset=utf-8'
      })
      res.end('주소가 없습니다')
    }
  } 
})

app.listen(port, () => {
  console.log(host + port)
})