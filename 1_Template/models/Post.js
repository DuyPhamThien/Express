const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title : String,
    description : String
});

module.exports = module.model('Posts',PostSchema);