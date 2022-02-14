var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a shipping resource");
});

router
  .route("/:id")
  .get(function (req, res, next) {
    res.send(`return shipping id : ${req.params.id}`);
  })
  .post(function (req, res, next) {
    res.send(`posted shipping id : ${req.params.id}`);
  })
  .put(function (req, res, next) {
    res.send(`updated shipping id : ${req.params.id}`);
  })
  .delete(function (req, res, next) {
    res.send(`deleted shipping id : ${req.params.id}`);
  });

module.exports = router;
