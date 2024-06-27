import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/studentRoutes.js";

const app = express();
app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;
console.log(MONGOURL)
 
mongoose.connect(MONGOURL).then(() => {
    console.log("Database is connected Sucessfullly !!");
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
}).catch((error) => console.log(error));

app.use("/api/student", route)