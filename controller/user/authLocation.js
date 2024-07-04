// 토큰을 이용해서 인증받은 라우팅
const authLocation = async (req, res, next) => {
    console.log(req)
    try {
        if(!req.user || !req.user._doc){
            return res.status(401).json({
                message: 'Unauthorized',
            })
        }
        // 인가가 완료된 유저는 req.user 담긴다.
        const {password, ...others} = req.user._doc;
        res.status(200).json({
            message : '자동 로그인 성공',
            ...others,
        });
    } catch (error) {
        console.error(error)
        next(error)
        res.status(401).json({
            message: 'Unauthorized',
        });
    }
}

export default authLocation;