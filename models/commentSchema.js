import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";
import { ObjectId } from "mongodb";

const commentSchema = new Schema({
    userId : {
        type: String, 
        required : true
    },
    roomId : {
        type: Number, 
        required : true
    },
    body : {
        type: String, 
        required : true
    },
    star : {
        type: Number, 
        required : true, 
        default: 0
    },
    grade : {
        type: ObjectId, 
        required : true
    },
    createAt: {
        type: String, 
        default : getCurrentTime
    },
    updateAt: {
        type: String, 
        default : getCurrentTime
    },
});

export default model("Comment", commentSchema, "comment");

