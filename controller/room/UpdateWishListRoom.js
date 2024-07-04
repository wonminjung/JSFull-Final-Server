import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import User from "../../models/userSchema.js";

// 사용자의 위시리스트에서 특정 숙소를 제거하는 API 엔드포인트를 구현
const UpdateWishListRoom = async( req, res) => {
    try {
        const user = await User.findOne({ userId: req.body.userId }); //로그인한 유저의 객체
        const roomId = req.body.roomId; //클릭한 숙소
        // user를 못가져온 경우 에러처리
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }else{
            // 용자의 위시리스트에서 해당 roomId와 일치하지 않는 숙소만 남기기
            const updatedWishList = user.wishList.filter((rooms) => rooms._id.toString() !== roomId)
            // 위시리스트 업데이트
            await User.updateOne({_id : user._id}, {$set : { wishList : updatedWishList}})
            // 업데이트된 사용자 객체 조회
            const updatedUser = await User.findOne({_id : user._id})
            const {...userDatas} = updatedUser;
            // 비밀번호를 제외한 사용자 데이터를 반환
            const {password, ...userDataWithoutPassword} = userDatas._doc;
            // 업데이트된 사용자 객체 반환
            return res.status(200).json({message : "wishList updated successfully", user : userDataWithoutPassword  });
        }  
        // 통신 에러 처리
    }catch(error) {
        console.error("Error fetching wishList:", error);
        res.status(500).json({ message: error.message });
    }


}

export default UpdateWishListRoom;