// import other libraries as CJS
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const port = 3000

const main = async () => {
  // import geckos as ESM
  const { geckos } = await import('@geckos.io/server')
  const io = geckos()

  io.addServer(server)
  io.onConnection(channel => {})

  app.use(express.static('www'))

  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

main()
