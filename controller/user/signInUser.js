import userSchema from "../../models/userSchema";

// 로그인
const signInUser = async (req, res) => {
    
    // 유저 찾기
    const user = await userSchema.findOne({email : req.body.email});

    // 존재하지 않은 유저일 때
    if(!user){
        // 잘못된 인증 401코드
        return res.status(401).json({
            loginSuccess : false,
            message : "존재하지 않는 회원입니다."
        })
    // 이메일이 존재하는 경우
    }else{
        // 비밀번호 확인
        const passwordMatch = req.body.password === user.password;
        
        // 비밀번호가 일치하지 않는 경우
        if(!passwordMatch){
            return res.status(401).json({
                loginSuccess : false, 
                message : "비밀번호를 확인해주세요"
            })
        }

        // 로그인 성공 시, 회원 정보 가져오기
        const {...userDatas} = user;
        const {password, ...others} = userDatas._doc;
        console.log(others);

        // 로그인 성공 인증 200코드, 회원 정보 화면에 게시
        return res.status(200).json({
            user : others,
            loginSuccess : true, 
            message : '로그인 성공',
        })
    }
};

export default signInUser;