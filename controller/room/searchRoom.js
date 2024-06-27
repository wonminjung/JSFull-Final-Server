import Booking from "../../models/bookingSchema.js";
import Room from "../../models/roomSchema.js";

const searchRoom = async (req, res) => {
    const contentPerPage = 18;

    const { cate, val, sdate, edate, guests, lPrice, gPrice, maxUser, bed, bedroom, bathroom, page } = req.query;

    const isCateCheck = cate === "searchResult" ?
        {
            roomSchedule: { $not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate + "Z")}} },
            dayPrice: {$gte: Number(lPrice), $lte: Number(gPrice)}, address: {$regex: val}, "roomData.maxUser": {$gte: Number(guests)},
            "roomData.bed": {$gte: Number(bed)}, "roomData.bedroom": {$gte: Number(bedroom)}, "roomData.bathroom": {$gte:Number(bathroom)}
        }
        :
        {
            roomSchedule: { $not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate + "Z")}} },
            cate: cate, dayPrice: {$gte: Number(lPrice), $lte: Number(gPrice)}, address: {$regex: val}, "roomData.maxUser": {$gte: Number(guests)},
            "roomData.bed": {$gte: Number(bed)}, "roomData.bedroom": {$gte: Number(bedroom)}, "roomData.bathroom": {$gte:Number(bathroom)}
        }
    ;
    
    const rooms = await Room.find(isCateCheck).skip((page - 1) * contentPerPage).limit(contentPerPage);
    const roomAllCount = await Room.find(isCateCheck).countDocuments();
    // console.log(rooms);
    // console.log(roomAllCount);

    if (rooms.length === 0) {
        res.status(200).json(
            {
                searchResult: false,
                message: "검색 결과가 없습니다.",
                roomsCount: roomAllCount,
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