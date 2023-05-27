const Product = require("../models/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const errormiddleware =require("../middleware/error");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create product -- Admin route

exports.createProduct = catchAsyncErrors(async (req,res,next) =>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});


// get All products

exports.getAllProducts = catchAsyncErrors(async (req,res) => {
    
    const products = await Product.find();

    res.status(200).json({
        success:true,
        product
    });
});

// get product details

exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.param.id);

    if(!product){
       return next(new ErrorHandler("Product not found",404))

    }

    res.status(200).json({
        success:true,
        product
    });
});

//update Products -- Admin

exports.updateProducts = catchAsyncErrors(async(req,res,next) => {

    const product = await Product.findById(req.param.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.param.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
});

// delete products -- Admin

exports.deleteProducts = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.param.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    
    await Product.remove();

    res.status(200).json({
        success:true,
        message:"Product delete succesfully"
    })
   
});