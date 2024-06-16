import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";

const userSchema = new Schema({


    // createAt: ,
    // updateAt: ,
});

export default model("User", userSchema, "user");

