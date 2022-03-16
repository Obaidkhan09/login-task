import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema({
    task: { type : String, required: true, minlength: 3 },
    author: String,
    uid: String,
    isComplete: Boolean,
    date: { type: Date, default: Date() }
});

export default mongoose.model('todo', TodosSchema);