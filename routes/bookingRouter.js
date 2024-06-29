import express from "express";
import reservationBooking from "../controller/booking/reservationBooking.js";
import bookingListBooking from "../controller/booking/bookingListBooking.js";

const bookingRouter = express.Router();

bookingRouter.post("/reservation", reservationBooking);
bookingRouter.post("/bookingList", bookingListBooking);


export default bookingRouter;