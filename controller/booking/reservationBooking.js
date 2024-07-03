import Room from "../../models/roomSchema.js";


const reservationBooking = async (req, res) => {
    try{

        const reservation = await Room.find({ _id: req.body.roomId});
        res.json(reservation);
        
    } catch(error) {
        console.error("Error fetching reservation:", error);
        res.status(500).json({message:error.message});

    }
};

export default reservationBooking;