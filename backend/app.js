import express from "express";
import userRouter from "./routes/user-routes";
// import mongoose from "mongoose";
// const app = express();
// import dotenv from 'dotenv'
// const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

//middlewares
app.use("/user", UserRouter)


mongoose.connect(`mongodb+srv://myselfyogesh25:${process.env.MONGODB_PASSWORD}@cluster0.jwiwd8d.mongodb.net/
`)
    .then(() => app.listen(4000, () => console.log("Connected Successfully")
    )
    ).catch(e => console.log(e));


