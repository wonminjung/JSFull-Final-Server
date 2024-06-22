import Room from "../../models/roomSchema.js";

const searchRoom = async (req, res) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.method);
    
    const rooms = await Room.find({cate: req.query.cate});
    if (rooms) {
        res.status(200).json({rooms: rooms});
    } else {
        res.status(401);
    }

};

export default searchRoom;