const mongoose = require('mongoose');

const instituteTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Institute type name is required'],
        unique: true,
        trim: true
    },
}, { timestamps: true });

module.exports = mongoose.model('instituteType', instituteTypeSchema);