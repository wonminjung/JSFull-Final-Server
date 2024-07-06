import Room from "../../models/roomSchema.js";

const searchRoom = async (req, res) => {

    const contentPerPage = 18;

    const page = +req.body.page;

    // req.query(쿼리스트링)이 {} 비어있을 경우 req.body에 있는 내용을 비구조화 할당
    const { cate, val, sdate, edate, guests, lPrice, gPrice, maxUser, bed, bedroom, bathroom } = Object.keys(req.query).length === 0 ? req.body : req.query;

    const defaultCheck = {
        roomSchedule: {$not: {$elemMatch: {$gte: new Date(sdate + "Z"), $lte: new Date(edate + "Z")}} }, dayPrice: {$gte: Number(lPrice), $lte: Number(gPrice)}, 
        address: {$regex: val}, $or: [ {"roomData.maxUser": {$eq: Number(maxUser)}}, {"roomData.maxUser": {$gte: Number(guests)}} ],
        "roomData.bed": {$gte: Number(bed)}, "roomData.bedroom": {$gte: Number(bedroom)}, "roomData.bathroom": {$gte: Number(bathroom)}
    };

    const isCateCheck = cate === "searchResult" ? { ...defaultCheck } : { ...defaultCheck, cate: cate };

    const rooms = await Room.find(isCateCheck).skip((page - 1) * contentPerPage).limit(contentPerPage);
    const roomAllCount = await Room.find(isCateCheck).countDocuments();


    if (rooms.length === 0) {
        res.status(200).json(
            {
                searchResult: false,
                message: "검색 결과가 없습니다.",
                roomsCount: roomAllCount,
                rooms: rooms,
            }
        );
    } else if (rooms.length >= 1) {
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