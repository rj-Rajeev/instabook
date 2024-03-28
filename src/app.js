import express from "express";

const app = express();
//routes import

import { userRouter } from "./routes/user.routes.js";

//routes decleration

app.use("/api/v1/users", userRouter);

export default app;
