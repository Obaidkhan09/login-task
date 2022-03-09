import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name : { type : String, minlength : 3, maxlength : 50, required : true },
    email : { type : String, minlength : 8, maxlength : 100, unique : true },
    password : { type : String, required : true, minlength : 5, maxlength : 100 }
});
export default mongoose.model('users', UsersSchema);