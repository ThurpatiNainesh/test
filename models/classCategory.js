const mongoose = require('mongoose');

const classCategorySchema = new mongoose.Schema({
    name: String
});
module.exports = mongoose.model('classCategory', classCategorySchema);