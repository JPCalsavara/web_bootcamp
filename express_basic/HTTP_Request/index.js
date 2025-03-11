import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res) => { 
  console.log(req.rawHeaders);
  res.send("Hello,World");
});

app.get("/contact", (req,res) => {
  console.log(req);
  res.send("jpcalsavara@gmail.com");
});

app.get("/about", (res,req) => {
  console.log(req);
  res.send("My name is Joao");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});