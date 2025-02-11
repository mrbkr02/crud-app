import express from "express"
import mongoose, { mongo } from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log(`The error is ${error}`);
})

app.use("/api", route);