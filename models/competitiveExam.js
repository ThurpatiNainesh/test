const mongoose = require('mongoose');

const competitiveExamsSchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });

module.exports = mongoose.model('competitiveExam', competitiveExamsSchema);