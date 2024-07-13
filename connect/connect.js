import mongoose from "mongoose";
import dotenv from 'dotenv';

// .env 실행
dotenv.config();

const connect_url = process.env.MONGODB_KEY;

const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", true);
    }

    mongoose
        .connect(connect_url, {
            dbName : "Eggbnb"
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Connected fail to MongoDB");
            console.log(err);
        })
}

export default connect;