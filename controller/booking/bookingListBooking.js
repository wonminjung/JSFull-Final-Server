import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";



const bookingListBooking = async (req, res) => {
    try{
       // 사용자 ID에 해당하는 예약 목록 가져오기
       const bookingList = await Booking.find({ userId: req.body.userId })
       .populate({// populate은 지정한 경로의 참조된 문서를 자동으로 채워주는 메서드
           // Booking 스키마에서 roomId 필드를 통해 Room 스키마와 연결
           path: 'roomId', //path는 populate 메서드에서 참조하려는 필드(경로)를 지정해줌
           model: Room,
           select : ' roomImg userId title address notice convenience dayPrice cleanVat',
           populate: { 
               // Room 스키마에서 userId 필드를 통해 User 스키마와 연결
               path: 'userId', 
               model: User,
               // User 스키마에서 name과 phone 필드만 선택
               select: 'name phone' // 필요한 사용자 정보만 선택
           }
       });

   // 가져온 예약 목록을 클라이언트로 응답
   res.json(bookingList);

    }catch(error){
        console.error("Error fetching bookingList:", error);
        res.status(500).json({message:error.message}); //500 Internal Server Error: 서버에서 알 수 없는 오류가 발생했을 때 사용
    }

};

export default bookingListBooking;