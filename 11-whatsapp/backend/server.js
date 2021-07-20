// importing
import express from "express";

// app config
const app = express();
const port = process.env.PORT || 9000;
//middleware

//db stuff

// api routes
app.get("/", (req, res) => res.status(200).send("hello World"));

// listener
app.listen(port, () => {
  console.log("helloooooooonode from port ", port);
});
