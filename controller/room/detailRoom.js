import Room from "../../models/roomSchema.js";
import User from "../../models/userSchema.js";
import Comment from "../../models/commentSchema.js";

const detailRoom = async (req, res) => {
    const room = await Room.findOne(
        {
            "_id" : req.query.roomId
        }
    );
    const user = await User.findOne(
        {
            "_id" : room.userId
        }
    );
    const comment = await Comment.find(
        {
            "roomId" : room._id
        }
    );
    const commentUsers = [];
    const al = async () => {
        for(let i=0;i<comment.length;i++){
            const commentUser = await User.findOne(
                {
                    "_id" : comment[i].userId
                }
            )
            commentUsers.push(commentUser);
        }
        return commentUsers
    }
    await al()
    if (room) {
        res.status(200).json({room: room, user: user, comment: comment, commentUsers: commentUsers});
    } else {
        res.status(401);
    }
};

export default detailRoom;