import express from "express";
import reservationBooking from "../controller/booking/reservationBooking";
import bookingListBooking from "../controller/booking/bookingListBooking";

const bookingRouter = express.Router();

bookingRouter.post("/reservation", reservationBooking);
bookingRouter.get("/bookingList", bookingListBooking);


export default bookingRouter;