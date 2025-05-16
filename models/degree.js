const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });

module.exports = mongoose.model('degree', degreeSchema);