const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("transaction resources");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`transaction id : ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`transaction id : ${req.params.id} added`);
  })
  .put((req, res) => {
    res.send(`transaction id : ${req.params.id} updated`);
  })
  .delete((req, res) => {
    res.send(`transaction id : ${req.params.id} deleted`);
  });
module.exports = router;
