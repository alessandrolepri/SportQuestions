const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: { type: String, require: true },
    category: { type: String, require: true },
    difficulty: { type: String, require: true },
    answerA: { type: String, require: true },
    answerB: { type: String, require: true },
    answerC: { type: String, require: true },
    answerD: { type: String, require: true },
});

module.exports = mongoose.model("Question", questionSchema);