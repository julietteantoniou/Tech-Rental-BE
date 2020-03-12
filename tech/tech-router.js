const router = require('express').Router();
const db = require('../tech/tech-model.js');
const validateToken = require('../middleware/validateToken.js');

router.get("/tech", (req, res) => {
  db.findTech()
    .then(tech => {
      res.status(200).json(tech);
    })
    
    .catch(err => res.status(500).json(console.log(err), err));
});

router.get("/tech/:id", (req, res) => {
    const { id } = req.params;
    db.findTechById(id)
    .then(tech => {
        const item = tech[0];
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(500).json({ error: `listing with id ${id} does not exist`})
        }
    })
    .catch(err => res.send(err));
})

router.get("/tech/user/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) {
        db.findTechByUser(id).then(tech => {
          if (tech.length) {
            res.status(200).json(tech);
          } else {
            res
              .status(404)
              .json({ message: "This user does not have any tech for rent" });
          }
        });
      } else {
        res.status(404).json({ message: `User ${id} does not exist` });
      }
    })
    .catch(err => res.send(console.log(err)));
});


router.post("/tech", validateToken, (req, res) => {
    const tech = req.body;
  
    if (tech) {
      db.insert(tech)
        .then(tech => {
          res.status(201).json({ message: "Listing created successfully!", tech });
        })
        .catch(err => {
            console.log(err)
          res.status(500).json({
            error: "There was an error creating the tech listing"
          });
        });
    } else {
      res.status(400).json({
        errorMessage: "Please provide all required fields"
      });
    }
  });

  router.put('/tech/:id', validateToken, (req, res) => {
    const changes = req.body;
    db.updateTech(req.params.id, changes)
      .then(tech => {
        if (tech) {
          res.status(200).json({ message: `tech ${req.params.id} succesfully updated`});
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating tech',
        }, error);
      });
  });

  router.delete("/tech/:id", validateToken, (req, res) => {
    const { id } = req.params;
    db.destroy(id)
      .then(tech => {
        if (tech) {
          res.status(200).json({ message: `tech id ${id} has been destroyed` });
        } else {
          res.status(404).json({
            message: `tech id ${id} not found`
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: `error deleting tech ${error}`
        });
      });
  });

  module.exports = router;