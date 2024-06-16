import express from "express";
import { bookingListBooking, reservationBooking } from "../controller/booking/booking.js";

const bookingRouter = express.Router();

bookingRouter.post("/reservation", reservationBooking);
bookingRouter.get("/bookingList", bookingListBooking);


export default bookingRouter;