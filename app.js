import express from "express";
import connect from "./connect/connect.js";
import rootRouter from "./routes/rootRouter.js";
import Booking from "./models/bookingSchema.js";
import Comment from "./models/commentSchema.js";
import Room from "./models/roomSchema.js";
import User from "./models/userSchema.js";

// 몽고DB
connect();

const app = express();
const port = 8000;

app.use("/", rootRouter);

app.listen(port, () => {console.log(`Server is on ${port} port`)});