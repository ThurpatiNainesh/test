const standardsSchema = new mongoose.Schema({
    standards: String,
    specificSubjects: Array,
});

module.exports = mongoose.model('standards', standardsSchema);