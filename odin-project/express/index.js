import "express";
const app = express();

import authorRouter from "./routes/authorRouter";

app.use("/authors", authorRouter);

const PORT = 3000;
 
app.listen(PORT,() => {
    console.log(`Listen on port ${PORT}`);
})