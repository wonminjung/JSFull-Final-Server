import passport from "passport";
import userSchema from "../../models/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

// passport Login
const passportLogin = async (req, res, next) => {
    try {
        passport.authenticate('local', (error, user, info) => {
            if(error || !user) {
                res.status(400).json({message : info.reason });
                return
            }
            req.login(user, {session : false}, async (loginError) => {
                if(loginError){
                    res.status(401).send(loginError)
                    localStorage.clear();
                    return;
                }
                // 여기에서 검증된 회원을 처리
                // 검증된 회원에게 jwt토큰 생성 후 전달
                const token = jwt.sign(
                    {
                        // email : user.email,
                        userId : user.userId,
                        // issuer : 'sangwon', 
                        issuer : `${user.userId}`, 
                    },
                    SECRET_KEY,
                    {
                        expiresIn : '24h' //유효시간 24시간
                    }
                )

                // 검증 (선택) 안해도 무관
                // .lean();
                const loginUser = await userSchema.findOne({email : user.email}).lean();
                console.log(loginUser)

                // 민감한 정보를 제거 후 
                // 유저와 토큰을 발급해서 화면으로 보낸다
                const { password, ...others } = loginUser;
                res.status(200).json({
                    user : others,
                    token : token,
                })
            })
            // console.log('authenticate', error, user, info)
        })(req, res, next)
    } catch (error) {
        console.error(error);
        next(error);
    }
}

export default passportLogin;