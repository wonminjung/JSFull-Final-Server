import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import { ObjectId } from "mongodb";

const userSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    name : { type : String, required: true },
    email: { type: String, required : true, unique : true },
    password : { type: String, required : true },
    profileImg: { type:String },
    address : { type: String },
    phone : { type : String, required: true, default : "010-0000-0000" },
    wishList : [ { type : ObjectId, ref: "Room" } ],
    createdAt : { type : String, default : getCurrentTime },
    updatedAt : { type : String, default : getCurrentTime }
});

export default model("User", userSchema, "user");