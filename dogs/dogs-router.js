const router = require("express").Router();

const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const Dogs = require("./dogs-model");
const secrets = require("../config/secrets");
const restricted = require("../middleware/restricted-middleware");

router.get("/", (req, res) => {
  res.send({ message: "working !!!!!!!!!" });
});

router.get("/getDogs",  (req, res) => {
  Dogs.find()
  .then(dogs => {
    res.json(dogs)
  })
  .catch(err => res.send({message: "get request for dogs failed"}))
});

router.post("/postDog", restricted, (req, res) => {
  let dog = req.body;

  Dogs.add(dog)
    .then(saved => {
      res
        .status(201)
        .json({ message: `Thanks for creating ${dog.name}.`, saved });
    })
    .catch(error => {
      res.status(500).json({ message: "cannot add this dog", error });
    });
});

router.put("/updateDog/:id", restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const dogData = req.body;

  if (!dogData.dogName || !dogData.description) {
    res.status(400).json({ message: "dogName and description required" });
  } else {
    Dogs.update(id, changes)
      .then(hub => {
        res.status(200).json({message: 'success :)'});
      })
      .catch(error => {
        console.log(postData);
        res.json({ message: "Thank you for updating your dog post" });
      });
  }
});

router.delete('/deleteDog/:id', restricted, (req, res) => {
  const id = req.params.id

  Dogs.remove(id)
  .then(dog => {
    res.json({message: 'dog post deleted succesfully', dog})
  })
  .catch(error => {
    res.status(200).json({message: 'the dog post could not be removed'})
  })
})

module.exports = router;
