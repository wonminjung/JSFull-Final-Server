import mongoose from "mongoose";

// mongodb+srv://jsfullprojectteam01:<password>@app.xqexdp9.mongodb.net/
const connect_url = `mongodb+srv://jsfullprojectteam01:1234@app.xqexdp9.mongodb.net/`;

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