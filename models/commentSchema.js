import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import { ObjectId } from "mongodb";

const commentSchema = new Schema({
    userId : { type: ObjectId, ref: "User", required : true },
    roomId : { type: ObjectId, ref: "Room", required : true },
    body : { type: String, required : true },
    star : { type: Number, required : true, default: 0 },
    grade : { 
        clean : { type : Number, required: true },
        accuracy : { type : Number, required: true },
        communication : { type : Number, required: true },
        location : { type : Number, required: true },
        priceSatis : { type : Number, required: true }
    },
    createAt: { type: String, default : getCurrentTime },
    updateAt: { type: String, default : getCurrentTime }
});

export default model("Comment", commentSchema, "comment");

