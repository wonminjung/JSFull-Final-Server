import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";

const bookingSchema = new Schema({
    checkInDate : {type: Date, required: true },
    checkOutDate : {type: Date, required: true  },
    guests:{type: Number,required: true },
    infants:{type: Number },
    userId : { type: ObjectId ,ref: "User", Unique: true, required:true},
    roomId : { type: ObjectId, ref: "Room",Unique: true, required:true },
    createdAt : { type : String, default : getCurrentTime },
    updatedAt : { type : String, default : getCurrentTime},
});

export default model("Booking", bookingSchema, "booking");

