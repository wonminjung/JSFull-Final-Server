import express from "express";
import connect from "./connect/connect.js";
import rootRouter from "./routes/rootRouter.js";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { initializePassport } from "./auth/auth.js";
import passport from "passport";

// 몽고DB
connect();

const app = express();
const port = 8000;

// .env 실행
dotenv.config();

app.use(cors());

app.use(bodyParser.json());

// passport 로직
app.use(passport.initialize());
initializePassport()

app.use("/", rootRouter);

app.use("/uploads", express.static('uploads'));

app.listen(port, () => {console.log(`Server is on ${port} port`)});