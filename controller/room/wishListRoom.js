import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import User from "../../models/userSchema.js";



const wishListRoom = async (req, res) => {

    try {
        const userId = req.query.userId;

        // userId를 ObjectId로 변환합니다.
        const objectId = new mongoose.Types.ObjectId(userId);

        // 유저 정보를 가져옵니다.
        const user = await User.findOne({ _id: objectId }).populate("wishList");

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // 유저 이름을 콘솔에 출력합니다.
        console.log("User Name:", user.name);

        // 유저의 wishList에 있는 모든 방을 가져옵니다.
        const rooms = user.wishList;

        // 방 제목을 콘솔에 출력합니다.
        rooms.forEach(room => {
            console.log("Room Title:", room.title);
        });

        // 클라이언트에게 방 정보를 응답합니다.
        res.status(200).json({ rooms: rooms });
    } catch (error) {
        console.error("Error fetching wish list:", error);
        res.status(500).json({ message: error.message });
    }
};


export default wishListRoom;