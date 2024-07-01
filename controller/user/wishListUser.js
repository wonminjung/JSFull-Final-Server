import User from "../../models/userSchema.js";

const wishListUser = async (req, res) => {
    try{
        await User.updateOne({_id : req.body._id},{$set : {wishList : req.body.wishList}})
        const user = await User.findOne({_id : req.body._id})
        const { ...userDatas } = user;
        const { password, ...others } = userDatas._doc;
        return res.status(200).json({
            user : others,
            message : "위시리스트가 변경되었습니다."
        })
    }catch(error){
        res.status(400).json({
            user : {},
            message : "요청이 실패하였습니다." 
        })
    }
};

export default wishListUser;