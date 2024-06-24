import Room from "../../models/roomSchema.js";

const searchRoom = async (req, res) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.method);
    
    const rooms = await Room.find({cate: req.query.cate});
    if (rooms.length === 0) {
        res.status(401).json(
            {
                searchResult: false,
                message: "검색 결과가 없습니다.",
            }
        );
    } else {
        res.status(200).json(
            {
                searchResult: true,
                rooms: rooms
            }
        );
    }

};

export default searchRoom;