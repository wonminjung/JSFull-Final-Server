import express from "express";
import signInUser from "../controller/user/signInUser.js";
import signUpUser from "../controller/user/signUpUser.js";
import myPageUser from "../controller/user/myPageUser.js";

const userRouter = express.Router();

userRouter.post("/signIn", signInUser);
userRouter.post("/signUp", signUpUser);
userRouter.put("/myPage", myPageUser);


export default userRouter;