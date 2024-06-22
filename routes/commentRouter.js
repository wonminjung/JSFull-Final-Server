import express from "express";
import detailComment from "../controller/comment/detailComment.js";
import myPageComment from "../controller/comment/myPageComment.js";


const commentRouter = express.Router();

commentRouter.get("/detail", detailComment);
// commentRouter.get("/myPage", myPageComment);

export default commentRouter;