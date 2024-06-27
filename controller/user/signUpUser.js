import userSchema from "../../models/userSchema";

// 회원가입
const signUpUser = async (req, res) => {
    // console.log(req.body)

    // 이메일 중복 확인
    const user = await userSchema.findOne({email : req.body.email});
    if(user){
        // 중복 회원 코드 , 409코드
        return res.status(409).json({
            registerSuccess : false,
            messagge : "이미 존재하는 이메일 입니다."
        })
    }else{
        // 신규 회원 가입, 유저 파싱
        let register = {
            userId : req.body.userId,
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            address : req.body.address,
            phone : req.body.phone,
        }

        // 유저 등록
        await userSchema.create(register)
        // 회원가입 성공 코드 200
        return res.status(200).json({
            registerSuccess : true,
            message : "회원가입을 축하드립니다!"
        })
    }
};

export default signUpUser;