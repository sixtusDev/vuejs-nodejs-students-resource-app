const mongoose = require('mongoose');

// Creating schema
const StudentsResourceSchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: String,
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const studentsResource = mongoose.model('studentsResource', StudentsResourceSchema);
module.exports = studentsResource;