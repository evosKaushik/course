import express from "express";
import http from "node:http";

const app = express()

app.disable("x-powered-by")
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/test', (req, res) => {
    res.send('Hello World!')
})

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})