import connect from "../../connect/connect.js"
import User from "../../models/userSchema.js"
import Room from "../../models/roomSchema.js"

connect();

const room1 = await Room.findOne({_id : "6671baaa295d664b248c586a"})
const user_Insert = await User.create(
    {
        userId : "hyeona023",
        password : "1234",
        name : "김현아",
        profileImg : "",
        email : "hyeona@gmail.com",
        address : "서울 강남구 테헤란로 518 섬유센터빌딩",
        phone : "010-1234-1234",
        wishList : [room1]
    },
    {
        userId : "example1",
        password : "1234",
        name : "이순신",
        profileImg : "",
        email : "example1@gmail.com",
        address : "서울 송파구 올림픽로 300",
        phone : "010-4321-4321",
        wishList : [room1]
    },
    {
        userId : "example2",
        password : "1234",
        name : "홍길동",
        profileImg : "",
        email : "example223@gmail.com",
        address : "경기 여주시 북내면 여양2로 672-18",
        phone : "010-1111-1111",
        wishList : [room1]
    }
)