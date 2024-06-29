import connect from "../../connect/connect.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";
import Room from "../../models/roomSchema.js";

connect();

const user1 = await User.findOne({userId : "hyeona023"});

const room1 = await Room.findOne({_id : "667adac97aa8b09d01fb7e42"}); // 선셋티아 3
const room2 = await Room.findOne({_id : "667adac97aa8b09d01fb7e87"}); // 일상호사 12
const room3 = await Room.findOne({_id : "667adac97aa8b09d01fb7f34"}); // 벨37 3
const room4 = await Room.findOne({_id : "667adac97aa8b09d01fb7dfa"}); // 위드독 6
const room5 = await Room.findOne({_id : "667adac97aa8b09d01fb7e33"}); // 통창이 있는 다이닝 공간 독채풀빌라 채이네 8
const room6 = await Room.findOne({_id : "667adac97aa8b09d01fb7e25"}); // E°SO 이소하우스 60평 독채 15



const booking_Insert = await Booking.create(
    //  {
    //     userId : user1,
    //     roomId : room1,
    //     checkInDate : "2024.07.01",
    //     checkOutDate : "2024.07.02",
    //     guests : 3,
    //     infants : 0,
    // },
    // {
    //     userId : user1,
    //     roomId : room2,
    //     checkInDate : "2024.07.02",
    //     checkOutDate : "2024.07.03",
    //     guests : 8,
    //     infants : 3,
    // },
    // {
    //     userId : user1,
    //     roomId : room3,
    //     checkInDate : "2024.07.04",
    //     checkOutDate : "2024.07.07",
    //     guests : 2,
    //     infants : 1,
    // },
    // {
    //     userId : user1,
    //     roomId : room4,
    //     checkInDate : "2024.07.08",
    //     checkOutDate : "2024.07.09",
    //     guests : 3,
    //     infants : 3,
    // },
    // {
    //     userId : user1,
    //     roomId : room5,
    //     checkInDate : "2024.07.11",
    //     checkOutDate : "2024.07.12",
    //     guests : 5,
    //     infants : 3,
    // },
    // {
    //     userId : user1,
    //     roomId : room6,
    //     checkInDate : "2024.07.15",
    //     checkOutDate : "2024.07.20",
    //     guests : 10,
    //     infants : 2,
    // },

)

