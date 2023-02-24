import mongoose from "mongoose";

const NewUser = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Middlename: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    UserID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 8
    }
})

export const NewUserModel = mongoose.model("Newuser",NewUser);