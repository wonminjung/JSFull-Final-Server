import express from "express";
import { detailRoom, mainRoom, reservationRoom, searchRoom, wishListRoom } from "../controller/room/room.js";

const roomRouter = express.Router();

roomRouter.get("/", mainRoom);
roomRouter.get("/detail", detailRoom);
roomRouter.get("/search", searchRoom);
roomRouter.get("/wishList", wishListRoom);
roomRouter.get("/reservation", reservationRoom);


export default roomRouter;