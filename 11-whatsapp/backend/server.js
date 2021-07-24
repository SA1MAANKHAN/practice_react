// importing
import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;
//middleware

//db stuff

const connectionUrl = `mongodb+srv://salmaan:5aiR6eJmJi19QpVE@cluster0.ipicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(connectionUrl, {});

// api routes
app.get("/", (req, res) => res.status(200).send("helloooooooooo World"));

// listener
app.listen(port, () => {
  console.log("helloooooooonode from port ", port);
});

// some pass 5aiR6eJmJi19QpVE
