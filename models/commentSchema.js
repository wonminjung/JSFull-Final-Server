import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils";

const commentSchema = new Schema({


    // createAt: ,
    // updateAt: ,
});

export default model("Comment", commentSchema, "comment");

