const router = require("express").Router();

router.route("/").get((req, res, next) => {
  res.send(`return orders`);
});

router
  .route("/:id")
  .get((req, res, next) => {
    res.send(`return orders : ${req.params.id}`);
  })
  .post((req, res, next) => {
    res.send(`post orders : ${req.params.id}`);
  })
  .put((req, res, next) => {
    res.send(`return orders : ${req.params.id}`);
  })
  .delete((req, res, next) => {
    res.send(`return orders : ${req.params.id}`);
  });
module.exports = router;
