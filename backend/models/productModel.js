const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        requird:[true,"please enter product Name"],
        trim:true
    },
    description:{
        type:String,
        requird:[true,"please enter product Description"]
    },
    price:{
        type:Number,
        requird:[true,"please enter product price"],
        maxLength:[8,"price cannot exceed 8 character"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            requird:true
        },
        url:{
            type:String,
            requird:true
        }
    }
    ],
    category:{
        type:String,
        requird:[true,"please enter product category"],
    },
    stock:{
        type:Number,
        requird:[true,"please enter product stock"],
        maxLength:[4,"Stock cannot exceed 4 character"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                requird:true,
            },
            rating:{
                type:Number,
                requird:true,
            },
            comment:{
                type:String,
                requird:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);