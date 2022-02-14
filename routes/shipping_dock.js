var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const data = await db.shipping_dock.findAll();
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
      const result = await db.shipping_dock.findByPk(id);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async function (req, res, next) {
    let id = Number(req.params.id);
    let data = req.body;
    try {
      const result = await db.shipping_dock.create({ ...data, id });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async function (req, res, next) {
    let id = Number(req.params.id);
    let data = req.body;
    try {
      const result = await db.shipping_dock.update(data, {
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
      const result = await db.shipping_dock.destroy({
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
