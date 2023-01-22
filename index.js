import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imgaiRoutes from "./routes/imgaiRoutes.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));


app.use("/api/v1/post", postRoutes);
app.use("/api/v1/img", imgaiRoutes);

const PORT = process.env.PORT;
const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();