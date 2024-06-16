import express from 'express';
import { index } from '../controller/index.js';
import commentRouter from './commentRouter.js';
import roomRouter from './roomRouter.js';
import userRouter from './userRouter.js';
import bookingRouter from './bookingRouter.js';

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/room", roomRouter);
rootRouter.use("/comment", commentRouter);
rootRouter.use("/booking", bookingRouter);


export default rootRouter;