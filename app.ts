import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./routes/orderRoutes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/orders", orderRouter);

app.listen(process.env.PORT, () => {
console.log("Node server started running",process.env.PORT);
});