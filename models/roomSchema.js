import { Schema, model, trusted } from "mongoose";
import { getCurrentTime } from "../utils/utils";
import { ObjectId } from "mongodb";

const roomSchema = new Schema(
    {
        userId : { 
            type: ObjectId, 
            ref: "User", 
            required: true
        },
        address : {
            type: String,
            uniqued: true,
            required: true
        },
        roomImg : {
            type: Array,
            required : true
        },
        description : {
            type: String,
            required: true
        },
        dayprice : {
            type: String,
            required: true
        },
        title : {
            type: String,
            required: true
        },
        notice : {
            type: Array,
            required: true
        },
        noticeIcon : {
            type: Array,
            required: true
        },
        cate : {
            type: String,
            required: true
        },
        convenience : {
            type: Array,
            required: true
        },
        convenienceIcon : {
            type: Array,
            required: true
        },
        roomData : {
            type: ObjectId,
            required: true
        },
        createdAt: {
            type: String,
            default: getCurrentTime
        },
        updatedAt: {
            type: String,
            default: getCurrentTime
        },
    }
);

export default model("Room", roomSchema, "room");

