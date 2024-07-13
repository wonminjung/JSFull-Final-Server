import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import { ObjectId } from "mongodb";

const bookingSchema = new Schema({
    guests: { type: Number, required: true },
    infants: { type: Number },
    userId : { type: ObjectId, ref: "User", unique: true, required:true },
    roomId : { type: ObjectId, ref: "Room", unique: true, required:true },
    createdAt : { type: String, default: getCurrentTime },
    updatedAt : { type: String, default: getCurrentTime },
    checkInDate : { type: Date, required: true },
    checkOutDate : { type: Date, required: true }
});

export default model("Booking", bookingSchema, "booking");

