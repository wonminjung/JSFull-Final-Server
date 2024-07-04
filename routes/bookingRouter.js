import express from "express";
import { reservationBooking, successBooking } from "../controller/booking/reservationBooking.js";
import bookingListBooking from "../controller/booking/bookingListBooking.js";

const bookingRouter = express.Router();

bookingRouter.get("/reservation", reservationBooking);
bookingRouter.get("/reservation/success", successBooking);
bookingRouter.post("/bookingList", bookingListBooking);


export default bookingRouter;