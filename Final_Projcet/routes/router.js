const express = require("express"),
  router = express.Router(),
  pagesController = require("../controllers/pages.controller"),
  listsController = require("../controllers/lists.controller");

module.exports = router;

router.get("/", pagesController.showHome);
router.get("/contact", pagesController.showContact);

router.get("/lists", listsController.showLists);

router.get("/create", listsController.create);
router.post("/store", listsController.store);

router.get("/edit/:id", listsController.edit);
router.post("/update/:id", listsController.update);

router.get("/lists/:id", listsController.showList);

router.get("/lists/:id/delete", listsController.deleteList);

const Contact = require("../models/contact");

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });

  newContact
    .save()
    .then(() => {
      res.redirect("/contact/success");
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/contact/error");
    });
});
router.get("/contact/success", (req, res) => {
  res.render("pages/contact-success");
});

router.get("/contact/error", (req, res) => {
  res.render("pages/contact-error");
});
