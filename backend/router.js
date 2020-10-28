const express = require("express");
const router = express.Router();
const Application = require("./schema");

router.get("/", (req, res) => {
  res.status(200).send("Hello AppStore !!");
});

router.get("/applications", (req, res) => {
  Application.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/application", (req, res) => {
  const { id } = req.query;

  // TODO: getApplicationById(id);
  const application = [];
  res.status(200).send(application);
});

router.post("/create/application", (req, res) => {
  const dbData = req.body;

  Application.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

module.exports = router;
