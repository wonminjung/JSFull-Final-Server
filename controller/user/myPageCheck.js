import User from "../../models/userSchema.js";

const myPageCheck = async (req, res) => {
    const key = Object.keys(req.body)
    console.log(key)
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
        console.log("this is password")
    }
};

export default myPageCheck;