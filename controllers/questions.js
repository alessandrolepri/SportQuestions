const Question = require("../models/question");

function indexRoute(req, res) {
    Question.find().then((questions) => res.status(200).json(questions));
}

function createRoute(req, res) {
    Question.create(req.body)
        .then((question) => res.status(201).json(question))
        .catch((err) => res.status(422).json(err.errors));
}

module.exports = {
    index: indexRoute,
    create: createRoute,
};