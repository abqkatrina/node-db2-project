const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
 const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        // .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

router.put("/:id", (req,res) => {
  const { id } = req.params.id;
  const { carInfo } = req.body;
  db("cars")
  .where("id", id)
  .update(id , carInfo)
  .then(carInfo => res.status(200).json(carInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json({message: "Failed to update data"})
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
  .where("id", id)
  .del()
  .then( car => {
    res.status(200).json({car})
  })
  .catch(error => {
    res.status(500).json({ error: "couldnt load cars"})
  })
})
module.exports = router;
