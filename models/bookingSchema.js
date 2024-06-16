import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";

const bookingSchema = new Schema({


    // createAt: ,
    // updateAt: ,
});

export default model("Booking", bookingSchema, "booking");

