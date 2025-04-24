 import { Router } from "express";
 const { getAuthorById } = require('../controllers/authorController');

 const authorRouter = Router();

 authorRouter.get("/", (req,res) => res.send("All authors"));

//  authorRouter.get("/:authorID", (req,res) => {
//     const { authorId } = req.params;
//     res.send(`Author ID: ${authorId}`)
//  })

 authorRouter.get("/:authorID", getAuthorById);

export default authorRouter;