import express from "express";
import reservationBooking from "../controller/booking/reservationBooking.js";
import bookingListBooking from "../controller/booking/bookingListBooking.js";

const bookingRouter = express.Router();

bookingRouter.get("/reservation", reservationBooking);
bookingRouter.get("/reservation/success", reservationBooking);
bookingRouter.post("/bookingList", bookingListBooking);


export default bookingRouter;