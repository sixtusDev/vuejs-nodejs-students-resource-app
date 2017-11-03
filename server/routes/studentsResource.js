const express = require('express');
const router = express.Router();
const StudentsResource = require('../model/StudentsResource')

// get all the student resource from the db
router.get('/', (req, res) => {
  StudentsResource.find({}).then(resources => {
    if (resources) {
      res.send(resources);
    } else {
      res.sendStatus(404);
    }
  }).catch(err => {
    res.status(412).json({msg: err.message});
  })
});

// create student resouirce to the db
router.post('/', (req, res) => {
  StudentsResource.create(req.body).then(resource => {
    res.send(resource);
  }).catch(err => {
    res.status(412).json({msg: err.message});
  })
});

// Get single student resource from the database
router.get('/:id', (req, res) => {
  StudentsResource.findById(req.params.id).then(resource => {
    res.send(resource);
  }).catch(err => {
    res.status(412).json({msg: err.message});
  })
})

// update student resorce route
router.put('/:id', (req, res) => {
  StudentsResource.findByIdAndUpdate(req.params.id, req.body).then(resource => {
    StudentsResource.findById(req.params.id).then(resource => {
      if(resource) {
        res.send(resource);
      } else {
        res.sendStatus(404);
      }
    })
  }).catch(err => {
    res.status(412).json({msg: err.message});
  })
});

// delete student resource route
router.delete('/:id', (req, res) => {
  StudentsResource.findByIdAndRemove(req.params.id).then(resource => {
    res.sendStatus(204);
  }).catch(err => {
    res.status(412).json({msg: err.message});
  })
});
module.exports = router;