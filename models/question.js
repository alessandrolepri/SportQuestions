const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: { type: String, require: true },
    category: { type: String, require: true },
    difficulty: { type: String, require: true },
    correct_answer: { type: String, require: true },
    incorrect_answer: { type: Array, require: true }
});

module.exports = mongoose.model("Question", questionSchema);