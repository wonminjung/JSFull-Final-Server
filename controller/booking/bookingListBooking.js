import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";



const bookingListBooking = async (req, res) => {
    try{
       // 사용자의 ObjectId에 해당하는 bookingList 조회
       const bookingList = await Booking.find({ userId: req.body.userId })
       .populate({
           // populate은 지정한 경로의 참조된 문서를 자동으로 채워주는 메서드
           path: 'roomId', // Booking 스키마에서 roomId 필드를 통해 Room 스키마와 연결 (path는 populate 메서드에서 참조하려는 필드를 지정해줌)
           model: Room,
           select : 'roomImg userId title address notice convenience dayPrice cleanVat',// 필요한 사용자 정보만 선택
           populate: { 
               // Room 스키마에서 userId 필드를 통해 User 스키마와 연결
               path: 'userId', 
               model: User,
               select: 'name phone' // 필요한 사용자 정보만 선택
           }
       });
   // 가져온 예약 목록(bookingList)을 클라이언트로 응답
   res.json(bookingList);
    }catch(error){
        console.error("Error fetching bookingList:", error);
         //500 Internal Server Error: 서버에서 알 수 없는 오류가 발생했을 때 사용
        res.status(500).json({message:error.message});
    }

};

export default bookingListBooking;