import Room from "../../models/roomSchema.js";
import Booking from "../../models/bookingSchema.js";

let bookingInfo = {
    guests: 0,
    infant: 0,
    userId: "",
    roomId: "", 
    createdAt: "",
    updatedAt: "",
};

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
    // try{
    //     const success = await Booking.create({ 
    //         userId: req.query.userId,
    //         roomId: req.query.roomId,
    //         checkInDate: req.query.checkInDate,
    //         checkOutDate: req.query.checkOutDate,
    //         guests: req.query.guests,
    //         infants: req.query.infants,
    //     });
    //     console.log(success);
    // } catch(error) {
    //     console.error("Error fetching booking:", error);
    //     res.status(500).json({message:error.message});
    // }
};

export { reservationBooking, successBooking };