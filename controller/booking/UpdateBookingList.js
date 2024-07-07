import mongoose from "mongoose";
import Booking from "../../models/bookingSchema.js";

const UpdateBookingList = async(req, res) => {
    try {
        const roomId = req.body.roomId; // 클릭한 숙소의 ObjectId
        console.log(roomId);
        
        // booking 데이터베이스에서 해당 예약건을 삭제
        const deletedBooking = await Booking.findOneAndDelete({"roomId" : roomId}); // 참조객체의 경우 _id로 지정해야함
        // deletedBooking : 삭제된 예약 정보

        if(deletedBooking){
            res.status(200).json({message : "예약이 성공적으로 삭제되었습니다.", data :deletedBooking })   
        }else{
            res.status(404).json({message : "삭제할 예약건을 찾을 수 없습니다."})
        }
        
  
    // 통신 에러 처리
    }catch(error) {
        console.error("예약 삭제 중 오류 발생:", error);
        res.status(500).json({ message: error.message });
    }


}


export default UpdateBookingList;