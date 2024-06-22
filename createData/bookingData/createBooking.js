import connect from "../../connect/connect.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";
import Room from "../../models/roomSchema.js";

connect();

const user1 = await User.findOne({userId : "hyeona023"});
const user2 = await User.findOne({userId : "SulSH"});


const room1 = await Room.findOne({_id : "6671baaa295d664b248c586a"});


const bok1 = await Booking.findOne({userId: user2.id}).populate("userId");
console.log(bok1);

// const booking_Insert = await Booking.create(
//     {
//         userId : user1,
//         roomId : room1,
//         checkInDate : "2024.06.19",
//         checkOutDate : "2024.06.20",
//         guests : 3,
//         infants : 1,
//     },
//     {
//         userId : user2,
//         roomId : room1,
//         checkInDate : "2024.06.22",
//         checkOutDate : "2024.06.24",
//         guests : 2,
//         infants : 0,
//     },
// )