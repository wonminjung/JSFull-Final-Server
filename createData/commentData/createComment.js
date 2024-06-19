import connect from "../../connect/connect.js";
import Comment from "../../models/commentSchema.js";
import User from "../../models/userSchema.js"
import Room from "../../models/roomSchema.js"

connect();
const user1 = await User.findOne({userId : "example1"})
const room1 = await Room.findOne({_id : "6671baaa295d664b248c586a"})
const comment_Insert = await Comment.create(
    {
        userId : user1,
        roomId : room1,
        body : "너무 만족스러운 여행이었어요~",
        star : 4,
        grade : {
            clean : 5,
            accuracy : 4,
            communication : 5,
            location : 4.5,
            priceSatis : 4.5,
        },
    },
)