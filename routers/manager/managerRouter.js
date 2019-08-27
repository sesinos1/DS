const router = require("express").Router();
const db = require("./managerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/manage", (req, res) => {
  db.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "there was an error" });
    });
});

router.post("/manage", (req, res) => {
  let user = req.body;

  db.add(user)
    .then(info => {
      res.status(201).json({
        ...info
      });
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

router.delete("manage/:id", (req, res) => {
  let id = req.params.id;

  db.remove(id)
    .then(users => {
      res.status(204).json({message: "it was removed"});
    })
    .catch(err => {
      res.status(500).json({
        error: "cannot be removed"
      });
    });
});

router.get("manage/:user_id", (req, res) => {
  let id = req.params.user_id;

  db.getByUserId(id)
    .then(posts => {
      res.status(201).send(posts);
    })
    .catch(err => {
      res.status(401).json({ error: "user does not exist" });
    });
});

router.put("manage/:id", (req, res) => {
  const id = req.params.id;
  const actionbod = req.body;

  db.update(id, actionbod)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: "The information could not be modified"
      });
    });
});

module.exports = router;
