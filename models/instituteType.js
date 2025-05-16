const mongoose = require('mongoose');

const instituteTypeSchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });

module.exports = mongoose.model('instituteType', instituteTypeSchema);