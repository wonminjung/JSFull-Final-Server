import Booking from "../../models/bookingSchema.js";
import Room from "../../models/roomSchema.js";

const UpdateBookingList = async (req, res) => {
    try {
        const roomId = req.body.roomId;

        // 예약을 찾아 삭제
        const deletedBooking = await Booking.findOneAndDelete({ "roomId": roomId });

        if (!deletedBooking) {
            return res.status(404).json({ message: "삭제할 예약건을 찾을 수 없습니다." });
        }

        // 삭제할 예약의 체크인 날짜와 체크아웃 날짜를 가져옴
        const { checkInDate, checkOutDate } = deletedBooking;

        // Room 모델에서 해당 roomId의 roomSchedule을 가져옴
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: "해당 숙소를 찾을 수 없습니다." });
        }

        // MongoDB에서 저장된 UTC 시간을 사용하여 날짜 구간을 처리
        const startDate = new Date(checkInDate); // 예약의 체크인 날짜
        const endDate = new Date(checkOutDate); // 예약의 체크아웃 날짜

        // UTC 시간을 기반으로 날짜 배열 생성
        const datesToDelete = [];
        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            datesToDelete.push(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0))); // UTC 날짜 생성
        }


        // roomSchedule에서 datesToDelete에 포함된 날짜들을 제외한 새로운 배열 생성
        const updatedSchedule = room.roomSchedule.filter(date => !datesToDelete.find(d => d.getTime() === date.getTime()));

        // Room 모델을 업데이트하여 roomSchedule을 수정
        room.roomSchedule = updatedSchedule;
        await room.save();

        // 성공적으로 삭제된 예약 정보를 클라이언트에 응답
        res.status(200).json({ message: "예약이 성공적으로 삭제되었습니다.", data: deletedBooking });

    } catch (error) {
        console.error("예약 삭제 중 오류 발생:", error);
        res.status(500).json({ message: error.message });
    }
};

export default UpdateBookingList;
