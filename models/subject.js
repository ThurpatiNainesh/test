const subjectSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('subjectSchema', subjectSchema);