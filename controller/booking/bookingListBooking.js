import Room from "../../models/roomSchema.js";

const bookingListBooking = async (req, res) => {

    const room = await Room.findOne(
            {
                "_id" : req.query.roomId
            }
    );
 




};

export default bookingListBooking;