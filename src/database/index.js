const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apirest');
mongoose.Promise = global.Promise;

module.exports = mongoose;