import Room from "../../models/roomSchema.js";
import Booking from "../../models/bookingSchema.js";


const reservationBooking = async (req, res) => {
    try{
        console.log(req.query);
        const reservation = await Room.findOne({ _id: req.query.roomId}, {roomImg: 1, title: 1, dayPrice: 1, cleanVat: 1});
        console.log(reservation);
        res.json(reservation);
    } catch(error) {
        console.error("Error fetching reservation:", error);
        res.status(500).json({message:error.message});

    }
};

const successBooking = async (req, res) => {
    try{
        
    } catch(error) {

    }
};

export default reservationBooking;