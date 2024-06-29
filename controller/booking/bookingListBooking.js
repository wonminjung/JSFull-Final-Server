import mongoose from "mongoose";
import Room from "../../models/roomSchema.js";
import bookingSchema from "../../models/bookingSchema.js";


const bookingListBooking = async (req, res) => {
    try{
        // console.log(req.body);//{ userId: '667ad4d1ab5eb02e847a4118' }
        const bookingList = await bookingSchema.find({userId:req.body.userId});
        

        // 유저의 예약내역 속 각 숙소들의 참조 ObjectId들
        const rooms = bookingList.map((item) => {
        return item.roomId;
         })
        
         console.log(rooms);

        res.json(bookingList);

    }catch(error){
        console.error("Error fetching bookingList:", error);
        res.status(500).json({message:error.message}); //500 Internal Server Error: 서버에서 알 수 없는 오류가 발생했을 때 사용
    }

};

export default bookingListBooking;