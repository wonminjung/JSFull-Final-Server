import express from "express";
import { reservationBooking, successBooking } from "../controller/booking/reservationBooking.js";
import bookingListBooking from "../controller/booking/bookingListBooking.js";
import passport from "passport";
import UpdateBookingList from "../controller/booking/UpdateBookingList.js";

const bookingRouter = express.Router();

bookingRouter.get("/reservation", reservationBooking);
bookingRouter.post("/bookingsuccess", passport.authenticate('jwt', {session:false}), successBooking);
bookingRouter.post("/bookingList", bookingListBooking);
bookingRouter.post("/updateBookingList", UpdateBookingList);



export default bookingRouter;