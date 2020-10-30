const express = require("express");
const router = express.Router();
const Application = require("./schema");

router.get("/", (req, res) => {
  res.status(200).send("Hello AppStore !!");
});

router.get("/applications", (req, res) => {
  const { name } = req.query;
  if (name) {
    Application.find({ name: new RegExp(name, "i") }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  } else {
    Application.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
});

router.get("/application", (req, res) => {
  const { id } = req.query;
  Application.findOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/create/application", (req, res) => {
  const dbData = req.body;
  console.log("----->", dbData);
  Application.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

module.exports = router;
