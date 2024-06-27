import express from "express";
import connect from "./connect/connect.js";
import rootRouter from "./routes/rootRouter.js";
import cors from 'cors';
import bodyParser from "body-parser";

// 몽고DB
connect();

const app = express();
const port = 8000;

app.use(cors());

app.use(bodyParser.json()); // 가은 추가

app.use(express.urlencoded({extended : false})); // 가은 추가

app.use("/", rootRouter);

app.listen(port, () => {console.log(`Server is on ${port} port`)});