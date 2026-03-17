import express from "express";



const app = express();
const port = 4000;

app.use(express.static("public"))


app.get("/video", (req, res)=>{
  res.sendFile(`${import.meta.dirname}/public/video.mkv`)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
