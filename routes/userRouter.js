import express from "express";
import signInUser from "../controller/user/signInUser.js";
import signUpUser from "../controller/user/signUpUser.js";
import myPageUser from "../controller/user/myPageUser.js";
import myPageCheck from "../controller/user/myPageCheck.js";
import multer from "multer";

const userRouter = express.Router();
const upload = multer({ dest: 'uploads/profile' })

userRouter.post("/signIn", signInUser);
userRouter.post("/signUp", signUpUser);
userRouter.patch("/myPage", myPageUser);
userRouter.post("/myPage", upload.single('profileImg'), myPageCheck);


export default userRouter;