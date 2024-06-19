import connect from "../../connect/connect.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";
import Room from "../../models/roomSchema.js";

connect();

const user1 = await User.findOne({userId : "hyeona023"})
const room1 = await Room.findOne({_id : "6671baaa295d664b248c586a"})
const booking_Insert = await Booking.create(
    {
        userId : user1,
        roomId : room1,
        checkInDate : "2024.06.19",
        checkOutDate : "2024.06.20",
        guests : 3,
        infants : 1,
    },
)