import connect from "../../connect/connect.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";
import Room from "../../models/roomSchema.js";

connect();

// user
const user1 = await User.findOne({userId : "hyeona023"});
const user3 = await User.findOne({userId : "HwangKH"});
const user4 = await User.findOne({userId : "BaeHY"});
const user5 = await User.findOne({userId : "GoIS"});
const user6 = await User.findOne({userId : "HongWJ"});
const user7 = await User.findOne({userId : "HongJH"});
const user2 = await User.findOne({userId : "SulSH"});
const user8 = await User.findOne({userId : "KangBH"}); 
const user9 = await User.findOne({userId : "LeeWM"}); 
const user10 = await User.findOne({userId : "KwonHW"}); 

// room
const room1 = await Room.findOne({_id : "6671baaa295d664b248c586a"}); //위드독 독채 풀빌라 -6
const room2 = await Room.findOne({_id : "6672f5a8424b440bf6b300fd"}); //강화도 럭셔리 대형 풀빌라-16
const room3 = await Room.findOne({_id : "6672f5a8424b440bf6b30116"}); //다온빌(스파/개별풀)-10
const room4 = await Room.findOne({_id : "6672f5a8424b440bf6b3016b"}); //바닷가 바로앞 오션뷰스파 객실, b200-6
const room5 = await Room.findOne({_id : "6672f5a8424b440bf6b30186"}); //E°SO 이소하우스 60평 독채-15
const room6 = await Room.findOne({_id : "6672f5a8424b440bf6b301b8"}); //Panorama-Full오션뷰-2
const room7 = await Room.findOne({_id : "6672f5a8424b440bf6b3019f"}); //청초淸楚 _ 위드 오션-2
const room8 = await Room.findOne({_id : "6672f5a8424b440bf6b301d1"}); //ilsanghosa A + B: Architect's Luxury Beach House -12
const room9 = await Room.findOne({_id : "6672f5a8424b440bf6b301f0"}); //뜨레시옷송당 제주키즈 풀빌라 -7
const room10 = await Room.findOne({_id : "6672f5a8424b440bf6b30209"}); //스테이 재 -3


// 유저 정보 조회
const bok1 = await Booking.findOne({userId: user2.id}).populate("userId");
console.log(bok1);


const booking_Insert = await Booking.create(
    //위드독 독채 풀빌라 예약건 -2건
    {
        userId : user1,
        roomId : room1,
        checkInDate : "2024.06.19",
        checkOutDate : "2024.06.20",
        guests : 3,
        infants : 1,
    },
    {
        userId : user2,
        roomId : room1,
        checkInDate : "2024.06.22",
        checkOutDate : "2024.06.24",
        guests : 2,
        infants : 0,
    },
    //강화도 럭셔리 대형 풀빌라 예약건 -2건
    {
        userId : user3,
        roomId : room2,
        checkInDate : "2024.06.20",
        checkOutDate : "2024.06.22",
        guests : 14,
        infants : 2,
    },
    {
        userId : user4,
        roomId : room2,
        checkInDate : "2024.06.23",
        checkOutDate : "2024.06.24",
        guests : 10,
        infants : 1,
    },
    //다온빌(스파/개별풀) 예약건 -3건
    {
        userId : user5,
        roomId : room3,
        checkInDate : "2024.06.21",
        checkOutDate : "2024.06.22",
        guests : 8,
        infants : 2,
    },
    {
        userId : user6,
        roomId : room3,
        checkInDate : "2024.06.23",
        checkOutDate : "2024.06.27",
        guests : 7,
        infants : 2,
    },
    {
        userId : user7,
        roomId : room3,
        checkInDate : "2024.06.27",
        checkOutDate : "2024.06.29",
        guests : 6,
        infants : 2,
    },
       //바닷가 바로앞 오션뷰스파 객실, b200 예약건 -3건
       {
        userId : user8,
        roomId : room4,
        checkInDate : "2024.06.22",
        checkOutDate : "2024.06.26",
        guests : 4,
        infants : 0,
    },
    {
        userId : user9,
        roomId : room4,
        checkInDate : "2024.06.26",
        checkOutDate : "2024.06.27",
        guests : 2,
        infants : 2,
    },
    {
        userId : user10,
        roomId : room4,
        checkInDate : "2024.06.27",
        checkOutDate : "2024.06.30",
        guests : 5,
        infants : 1,
    },
    //°SO 이소하우스 60평 독채, b200 예약건 -1건
    {
        userId : user4,
        roomId : room5,
        checkInDate : "2024.06.26",
        checkOutDate : "2024.06.28",
        guests : 10,
        infants : 5,
    },
    // Panorama-Full오션뷰 예약건 -3건
    {
        userId : user1,
        roomId : room6,
        checkInDate : "2024.06.25",
        checkOutDate : "2024.06.26",
        guests : 2,
        infants : 0,
    },
    {
        userId : user2,
        roomId : room6,
        checkInDate : "2024.06.26",
        checkOutDate : "2024.06.28",
        guests : 2,
        infants : 0,
    },
    {
        userId : user3,
        roomId : room6,
        checkInDate : "2024.06.28",
        checkOutDate : "2024.06.29",
        guests : 2,
        infants : 0,
    },
    // 청초淸楚 _ 위드 오션 예약건 -2건
    {
        userId : user4,
        roomId : room7,
        checkInDate : "2024.07.01",
        checkOutDate : "2024.07.03",
        guests : 2,
        infants : 0,
    },
    {
        userId : user5,
        roomId : room6,
        checkInDate : "2024.07.03",
        checkOutDate : "2024.07.04",
        guests : 1,
        infants : 1,
    },
    // ilsanghosa A + B: Architect's Luxury Beach House 예약건 -2건
    {
        userId : user3,
        roomId : room8,
        checkInDate : "2024.07.01",
        checkOutDate : "2024.07.02",
        guests : 10,
        infants : 2,
    },
    {
        userId : user4,
        roomId : room8,
        checkInDate : "2024.07.03",
        checkOutDate : "2024.07.10",
        guests : 8,
        infants : 2,
    },
    //뜨레시옷송당 제주키즈 풀빌라 예약건 -2건
    {
        userId : user8,
        roomId : room9,
        checkInDate : "2024.07.02",
        checkOutDate : "2024.07.03",
        guests : 7,
        infants : 0,
    },
    {
        userId : user9,
        roomId : room9,
        checkInDate : "2024.07.03",
        checkOutDate : "2024.07.07",
        guests : 4,
        infants : 2,
    },
    //스테이 재 예약건 - 3건
    {
        userId : user1,
        roomId : room10,
        checkInDate : "2024.07.10",
        checkOutDate : "2024.07.11",
        guests : 2,
        infants : 1,
    },
    {
        userId : user9,
        roomId : room10,
        checkInDate : "2024.07.11",
        checkOutDate : "2024.07.13",
        guests : 3,
        infants : 0,
    },


)

