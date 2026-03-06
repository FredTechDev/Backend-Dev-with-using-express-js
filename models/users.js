const { default: mongoose } = require("mongoose");

const userSchema = new mongoose;

//users model
Schema({
    name: {
        type : String,
        required : true
    },

    email: {
        type : String,
        required : true,
        uniqie : true
    },
    age : Number,
    createdat : {
        tyoe : Date,
        default : Date.now
    }
});

module.exports = userSchema;