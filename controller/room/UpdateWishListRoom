import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import User from "../../models/userSchema.js";

const UpdateWishListRoom = async( req, res) => {
    try {
        const user = await User.findOne({ userId: req.body.userId }); //로그인한 유저의 객체
        const roomId = req.body.roomId; //클릭한 숙소
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }else{
            const updatedWishList = user.wishList.filter((rooms) => rooms._id.toString() !== roomId)
            await User.updateOne({_id : user._id}, {$set : { wishList : updatedWishList}})
            const updatedUser = await User.findOne({_id : user._id})
            console.log(updatedUser);
            const {...userDatas} = updatedUser;
            const {password, ...userDataWithoutPassword} = userDatas._doc;
            
            return res.status(200).json({message : "wishList updated successfully", user : userDataWithoutPassword  });
           
            
            // res.status(200).json({message : "wishList updated successfully", wishList : user.wishList});
        }  

    }catch(error) {
        console.error("Error fetching wishList:", error);
        res.status(500).json({ message: error.message });
    }


}

export default UpdateWishListRoom;