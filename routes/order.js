const router = require("express").Router();
const db = require("../models");

router.route("/").get(async (req, res, next) => {
  try {
    const data = await db.order.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router
  .route("/:id")
  .get(async function (req, res, next) {
    let id = Number(req.params.id);
    try {
      const result = await db.order.findAll({
        where: {
          id: id,
        },
      });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async function (req, res, next) {
    let id = Number(req.params.id);
    let data = req.body;
    try {
      const result = await db.order.create({ ...data, id });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async function (req, res, next) {
    let id = Number(req.params.id);
    let data = req.body;
    try {
      const result = await db.order.update(data, {
        where: {
          id,
        },
      });
      res.json({ id, data });
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async function (req, res, next) {
    let id = req.params.id;
    try {
      const result = await db.order.destroy({
        where: {
          id,
        },
      });
      res.send(`entry with id: ${id} deleted`);
    } catch (error) {
      console.log(error);
    }
  });
module.exports = router;
