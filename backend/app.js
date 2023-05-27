const express = require("express");

const app=express();
const errormiddleware=require("./middleware/error");


// Route imports

app.use(express.json());

const product=require("./routes/productRoute");

app.use("/api/v1",product);

app.use(errormiddleware);

module.exports=app;