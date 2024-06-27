import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import User from "../../models/userSchema.js";

const wishListRoom = async (req, res) => {
    try {
        // user 조회 (wishList 참조객체도 같이)
        const user = await User.findOne({ userId: req.query.userId }).populate("wishList");

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        
        // check
        console.log("User Name:", user.name);

        // 찜한 숙소 다 가져오기 (array)
        const rooms = user.wishList;

        // check
        rooms.forEach(room => {
            console.log("Room Title:", room.title);
        });

        // client에 room정보 보내기
        res.status(200).json({ rooms: rooms });

    } catch (error) {
        console.error("Error fetching wishList:", error);
        res.status(500).json({ message: error.message });
    }
};

export default wishListRoom;
