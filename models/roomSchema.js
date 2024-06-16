import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";

const roomSchema = new Schema({


    // createAt: ,
    // updateAt: ,
});

export default model("Room", roomSchema, "room");

