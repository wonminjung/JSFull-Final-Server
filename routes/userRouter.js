import express from "express";
import signInUser from "../controller/user/signInUser.js";
import signUpUser from "../controller/user/signUpUser.js";
import myPageUser from "../controller/user/myPageUser.js";
import myPageCheck from "../controller/user/myPageCheck.js";
import multer from "multer";
import wishListUser from "../controller/user/wishListUser.js";
import checkUserEmail from "../controller/user/checkUserEmail.js";
import checkUserId from "../controller/user/checkUserId.js";
import passport from "passport";
import passportLogin from "../controller/user/passportLogin.js";
import authLocation from "../controller/user/authLocation.js";

const userRouter = express.Router();
const upload = multer({ dest: 'uploads/profile' })

userRouter.patch("/", wishListUser);
userRouter.post("/signIn", signInUser);
userRouter.post("/signUp", signUpUser);
userRouter.post("/checkEmail", checkUserEmail);
userRouter.post("/checkUserId", checkUserId);
userRouter.patch("/myPage", myPageUser);
userRouter.post("/myPage", upload.single('profileImg'), myPageCheck);

// passport 추가
userRouter.post("/passportLogin", passportLogin);

// 추가로 인증 후 접근해야하는 fetch마다 authenticateLocal()을 심는다.
userRouter.post("/auth", passport.authenticate('jwt', {session:false}), authLocation)

export default userRouter;