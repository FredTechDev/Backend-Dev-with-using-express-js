const { default: mongoose, Schema } = require("mongoose");

const productsSchema = new mongoose;

//products model
Schema({
    productname : {
        type : String,
        require : true
    },
    price : {
        type : currency,
        required : true
    }
})

module.exprots = productsSchema;