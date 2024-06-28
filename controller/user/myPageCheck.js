import User from "../../models/userSchema.js";
import fs from "fs"

const myPageCheck = async (req, res) => {
    const key = Object.keys(req.body)
    if(!req.file){
        if(key[0]==="email"){
            const result = await User.exists(req.body)
            if(result===null){
                return res.status(200).json({
                    message : false
                })
            }else{
                return res.status(200).json({
                    message : true
                })
            }
        }else if(key[0]==="password"){
            const result = await User.findOne({_id : req.body._id})
            if(result.password === req.body.password){
                return res.status(200).json({
                    message : true
                })
            }else{
                return res.status(200).json({
                    message : false
                })
            }
        }
    }else{
        console.log(req.file)
        const profileBefore = await User.findOne({userId : req.body.userId})
        await User.updateOne( {userId : req.body.userId} , {$set : {profileImg : req.file.path}})
        const user = await User.findOne({userId : req.body.userId})
        const { ...userDatas } = user;
        const { password, ...others } = userDatas._doc;
        if(fs.existsSync(profileBefore.profileImg)){ // 파일이 존재한다면 true 그렇지 않은 경우 false 반환
            fs.unlinkSync(profileBefore.profileImg) // unlinkSync 파일 삭제
        }
        return res.status(200).json({
            user : others,
            message : "정보가 수정되었습니다."
        })
    }
};

export default myPageCheck;