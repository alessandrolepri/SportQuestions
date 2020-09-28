const router = require("express").Router();
const questionsController = require("../controllers/questions");

router
    .route("/")
    .get(questionsController.index)
    .post(questionsController.create);

module.exports = router;