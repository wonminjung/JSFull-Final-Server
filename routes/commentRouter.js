import express from "express";
import { detailComment } from "../controller/comment/comment.js";

const commentRouter = express.Router();

commentRouter.get("/detail", detailComment);
// commentRouter.get("/myPage", myPageComment);

export default commentRouter;