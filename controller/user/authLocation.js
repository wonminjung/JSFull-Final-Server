// 토큰을 이용해서 인증받은 라우팅
const authLocation = async (req, res, next) => {
    try {
    // 인가가 완료된 유저는 req.user 담긴다.
    console.log("authLocation", req.user)
    const {password, ...others} = req.user;
    res.status(200).json({
        message : '자동 로그인 성공',
        ...others._doc,
    });
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export default authLocation;