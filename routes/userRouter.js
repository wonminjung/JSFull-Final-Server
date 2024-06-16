import express from "express";
import { myPageUser, signInUser, signUpUser } from "../controller/user/user.js";

const userRouter = express.Router();

userRouter.post("/signIn", signInUser);
userRouter.post("/signUp", signUpUser);
userRouter.put("/myPage", myPageUser);


export default userRouter;