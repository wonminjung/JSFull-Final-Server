import User from "../../models/userSchema.js";

const myPageUser = async (req, res) => {
    console.log(req.body)
    console.log(req.body[0])
    const user = await User.findOne(req.body[0])
    if(user){
        await User.updateOne(req.body[0],{$set : req.body[1]})
        const updatedUser = await User.findOne(req.body[0])
        const { ...userDatas } = updatedUser;
        const { password, ...others } = userDatas._doc;
        return res.status(200).json({
            user : others,
            message : "정보가 수정되었습니다."
        })
    }else{
        return res.status(401).json({
            message : "해당 유저가 존재하지 않습니다."
        })
    }
};
export default myPageUser;