import express from "express";
import detailRoom from "../controller/room/detailRoom.js";
import searchRoom from "../controller/room/searchRoom.js";
import wishListRoom from "../controller/room/wishListRoom.js";
import reservationRoom from "../controller/room/reservationRoom.js";
import mainRoom from "../controller/room/mainRoom.js";
import UpdateWishListRoom from "../controller/room/UpdateWishListRoom";


const roomRouter = express.Router();

roomRouter.get("/", mainRoom);
roomRouter.get("/detail", detailRoom);
roomRouter.get("/search", searchRoom);
roomRouter.post("/wishList", wishListRoom);
roomRouter.post("/updateWishList", UpdateWishListRoom); 
roomRouter.get("/reservation", reservationRoom);


export default roomRouter;