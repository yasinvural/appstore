const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello AppStore !!");
});

router.get("/applications", (req, res) => {
  // TODO: getApplications();
  const applications = [];
  res.status(200).send(applications);
});

router.get("/application", (req, res) => {
  const { id } = req.query;

  // TODO: getApplicationById(id);
  const application = [];
  res.status(200).send(application);
});

module.exports = router;
