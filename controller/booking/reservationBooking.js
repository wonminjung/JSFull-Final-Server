import Room from "../../models/roomSchema.js";
import Booking from "../../models/bookingSchema.js";
import User from "../../models/userSchema.js";

const reservationBooking = async (req, res) => {
    try{
        const reservation = await Room.findOne({ _id: req.query.roomId}, {roomImg: 1, title: 1, dayPrice: 1, cleanVat: 1});
        res.json(reservation);
    } catch(error) {
        console.error("Error fetching reservation:", error);
        res.status(500).json({message:error.message});

    }
};

const successBooking = async (req, res) => {
        const { _id } = req.user;
        const {
            roomId, 
            checkInDate,
            checkOutDate, 
            guests,
            infants
        } = req.body;
        const sdate = new Date(`${checkInDate}Z`);
        const edate = new Date(`${checkOutDate}Z`);
        const interval = new Date(edate.getTime() - sdate.getTime());
        const intervalDay = Math.floor(interval / (1000 * 60 * 60 * 24) );

        let dateList = [];

        for (let i = 0; i < intervalDay + 1; i++) {
            dateList.push(new Date(`${checkInDate}Z`));

            dateList[i].setDate((dateList[i].getDate() + i));
        }


        
        const updateSchedule = await Room.findOne({_id: roomId}, {roomSchedule : 1});
        const newSchedule = updateSchedule.roomSchedule.concat(dateList);
        await Room.updateOne({_id: roomId}, {'$set':{roomSchedule: newSchedule}});



        if(!req.user){
            res.json(401).json({
                message : "잘못된 접근 입니다."
            })
        }
        
        if(!roomId && !checkInDate && !checkOutDate && !guests && !infants){
            res.json(403).json({
                message : "잘못된 접근 입니다."
            })
        }

        const createBooking = await Booking.create({ 
            userId: _id,
            roomId: roomId,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            guests: guests,
            infants: infants,
        });

        res.status(200).json({
            message : "룸 부킹이 완료되었습니다."
        })

};

export { reservationBooking, successBooking };