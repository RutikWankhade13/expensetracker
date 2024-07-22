import { model, Schema } from "mongoose";

const userschema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    passsword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    dob: {
        type: true,
        required: true
    }
},{
    timestamps:true,
});

const User = model("User", userschema);

export default User;