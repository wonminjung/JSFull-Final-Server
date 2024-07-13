import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import { ObjectId } from "mongodb";

const roomSchema = new Schema({
    userId : { type: ObjectId, ref: "User", required: true },
    address : { type: String, uniqued: true, required: true },
    roomImg : [ 
        { type: String, required : true }
    ],
    description : { type: String, required: true },
    dayPrice : { type: Number, required: true },
    title : { type: String, required: true },
    notice : [
        [
            {
                icon : { type: String, required: true },
                content : { type: String, required: true }
            }
        ]
    ],
    cate : { type: String, required: true },
    convenience : [
        {
            icon : { type: String, required: true },
            con : { type: String, required: true }
        }
    ],
    roomData : {
        maxUser : { type: Number, required: true },
        bedroom : { type: Number, required: true },
        bed : { type: Number, required: true },
        bathroom : { type: Number, required: true }
    },
    cleanVat: { type: Number, required: true },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
    roomSchedule: [ 
        { type: Date }
    ]
});

export default model("Room", roomSchema, "room");

