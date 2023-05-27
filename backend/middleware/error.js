const ErrorHandler = require("./utils/errorhandler");

module.exports = (err,req,res,next)=>{
  err.statuscode = statuscode || 500;
  err.message = message || "internal server error";


  // wrong mongodb id error

  if(err.name === "castError"){
    const message = `Resource not found.Invalid: ${err.path}`;
    err = new ErrorHandler(message,400);
  }

  res.status(statuscode).json({
    success:false,
    message:err.message
  });
};


