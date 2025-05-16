const classSchema = new mongoose.Schema({
    classCategory: String,
    classCategoryId: String,
    standards: String
});
module.exports = mongoose.model('class', classSchema);