import express from "express";

const app = express()
app.disable("x-powered-by")
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
