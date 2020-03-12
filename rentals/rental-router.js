const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const validateToken = require('../middleware/validateToken.js');
const db = require('./rental-model.js');

router.get("/", validateToken,  (req, res) => {
    db.find()
      .then(rentals => {
        res.status(200).json(rentals);
      })
      
      .catch(err => res.status(500).json(console.log(err), err));
  });

  router.put('/:id', validateToken, (req, res) => {
    const changes = req.body;
    db.update(req.params.id, changes)
      .then(rental => {
        if (rental) {
          res.status(200).json(rental);
        } else {
          res.status(404).json({ message: 'The rental could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating rental',
        }, error);
      });
  });


  router.get("/:id", validateToken, (req, res) => {
    const { id } = req.params;
    db.findById(id)
    .then(rentals => {
      const rental = rentals[0];
        if (rental) {
            res.status(200).json(rental);
        } else {
            res.status(500).json({ error: `rental with id ${id} does not exist`})
        }
    })
    .catch(err => res.status(500).json(console.log(err), err));
})

router.get("/renter/:id", validateToken, (req, res) => {
  const { id }  = req.params;
  db.findByRenter(id)
  .then(rental => {
      if (rental) {
          res.status(200).json(rental);
      } else {
          res.status(500).json({ error: `rental with id ${id} does not exist`})
      }
  })
  .catch(err => res.status(500).json(console.log(err), err));
})

router.get("/owner/:id", validateToken, (req, res) => {
  const { id }  = req.params;
  db.findByOwner(id)
  .then(rental => {
      if (rental) {
          res.status(200).json(rental);
      } else {
          res.status(500).json({ error: `rental with id ${id} does not exist`})
      }
  })
  .catch(err => res.status(500).json(console.log(err), err));
})

router.post("/",  validateToken, (req, res) => {
  const rental = req.body;

  if (rental) {
    db.addRental(rental)
      .then(rental => {
        res.status(201).json({ message: "Rental created successfully!", rental });
      })
      .catch(err => {
          console.log(err)
        res.status(500).json({
          error: "There was an error creating the rentalg"
        });
      });
  } else {
    res.status(400).json({
      errorMessage: "Please provide all required fields"
    });
  }
});

router.get("/rentalsraw", (req, res) => {
  db.findraw()
    .then(rentals => {
      res.status(200).json(rentals);
    })
    
    .catch(err => res.status(500).json(console.log(err), err));
});

router.delete("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  db.destroy(id)
    .then(rental => {
      if (rental) {
        res.status(200).json({ message: `Rental id ${id} has been destroyed` });
      } else {
        res.status(404).json({
          message: `Rental id ${id} not found`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "error deleting rental"
      });
    });
});



module.exports = router