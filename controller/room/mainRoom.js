import Room from "../../models/roomSchema.js";

const mainRoom = async (req, res) => {
    const room = await Room.find(
        {
            "cate" : req.query.cate,
        }
    );
    if (room) {
        res.status(200).json({room: room});
    } else {
        res.status(401);
    }
};

export default mainRoom;