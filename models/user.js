const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    instituteType: String,
    instituteTypeId: {
        type: mongoose.Schema.ObjectId,
        ref: "instituteType"
    },
    UserName: String,
    educationBoard: {
        type: String,
        enum: ["G.S.E.B", "C.B.S.C", "G.T.U"]
    },
    medium: {
        type: String,
        enum: ["Hindi", "English"]
    },
    classId: {
        type: mongoose.Schema.ObjectId,
        ref: "class"
    },
    standards: String,
    specificSubjects: String,
    specificSubjectId: {
        type: mongoose.Schema.ObjectId,
        ref: "subjectSchema"
    },
    degreeType: String,
    degreeTypeId: {
        type: mongoose.Schema.ObjectId,
        ref: "degree"
    },
    competitiveExams: String,
    competitiveExamsId: {
        type: mongoose.Schema.ObjectId,
        ref: "competitiveExam"
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);