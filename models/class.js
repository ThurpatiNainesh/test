
const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    classCategory: {
        type: String,
        required: true
    },
    classCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'classCategory',
        required: true
    },
    standards: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('class', classSchema);