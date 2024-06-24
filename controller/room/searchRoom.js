import Booking from "../../models/bookingSchema.js";
import Room from "../../models/roomSchema.js";

const searchRoom = async (req, res) => {
    const contentPerPage = 18;

    // val=서울&sdate=2024.07.08&edate=2024.07.23&guests=0&lPrice=0&gPrice=1000000&maxUser=0&bedroom=0&bed=0&bathroom=0&page=1
    const { cate, val, sdate, edate, guests, lPrice, gPrice, maxUser, bed, bedroom, bathroom, page } = req.query;

    // console.log(req.query.sdate);
    // console.log(req.query.edate);
    // console.log(new Date("2013-06-07T00:00:00Z").toDateString());
    // console.log(new Date(req.query.edate).toTimeString());
    // console.log(new Date(sdate));
    // console.log(new Date(edate).valueOf());
    // console.log(new Date(sdate).now);

    // const booking = await Booking.find({$not: [{ checkInDate: {$gte: Date(sdate).valueOf()}, checkOutDate: {$lt: Date(edate).valueOf()} }]}, {checkInDate: 1, checkOutDate: 1});
    // const roomSche = await Room.find(
    //     {
    //         roomSchedule: { $not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate)}} }
    //         // roomSchedule: { $elemMatch: {$gte: new Date(sdate + "Z").valueOf(), $lte: new Date(edate).valueOf()} }
    //     }
    // );
    // console.log(roomSche.length);


    // const roomSc = await Room.find({}, {_id: true, userId: true, roomSchedule: true});
    // const roomSc = await Room.find({address: "충남 태안군"});
    // console.log(roomSc.length);





    // 2. and도 오류
    // const roomSche = await Room.find(
    //     {
    //         roomSchedule: { $elemMatch: { $and: [ {$gte: new Date(sdate + "Z").valueOf()}, {$lte: new Date(edate + "Z")}.valueOf()} ] }
    //     }
    // );
    // 1. room 컬렉션에서 roomSchedule 배열 안에 있는 값들 비교하는 쿼리인데... elemMatch 에 객체 하나만 오도록 설정되어 있는지 구문 오류 남
    // const roomSche = await Room.find(
    //     { 
    //         roomSchedule: { $elemMatch: [ { $gte: new Date(sdate + "Z").valueOf()}, {$lte: new Date(edate + "Z")}.valueOf()} ] } 
    //     }
    // );
    // const booking = await Booking.find({checkInDate: {$gte: new Date(sdate + "Z").valueOf()}, checkOutDate: {$lte: new Date(edate + "Z")}.valueOf()}, {checkInDate: 1, checkOutDate: 1});
    // const booking = await Booking.find({checkInDate: {$gte: new Date(sdate).valueOf()}, checkOutDate: {$lte: new Date(edate)}.valueOf()}, {checkInDate: 1, checkOutDate: 1});
    // console.log(booking);







    const isCateCheck = cate === "searchResult" ?
        {
            roomSchedule: { $not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate)}} },
            dayPrice: {$gte: Number(lPrice), $lte: Number(gPrice)}, address: {$regex: val},
            "roomData.maxUser": {$gte: Number(guests)}
        }
        :
        {
            roomSchedule: { $not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate)}} },
            cate: cate, dayPrice: {$gte: Number(lPrice), $lte: Number(gPrice)}, address: {$regex: val},
            "roomData.maxUser": {$gte: Number(guests)}
        }
    ;
    
    const rooms = await Room.find(isCateCheck).skip((page - 1) * contentPerPage).limit(contentPerPage);
    const roomAllCount = await Room.find(isCateCheck).countDocuments();
    console.log(rooms);

    if (rooms.length === 0) {
        res.status(200).json(
            {
                searchResult: false,
                message: "검색 결과가 없습니다.",
                rooms: rooms,
            }
        );
    } else {
        res.status(200).json(
            {
                searchResult: true,
                rooms: rooms,
                roomsCount: roomAllCount
            }
        );
    }

};

export default searchRoom;