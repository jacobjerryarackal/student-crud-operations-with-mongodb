import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required : true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        min : 3,
        max : 30
    },
    age: {
        type: Number,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("students",studentSchema);