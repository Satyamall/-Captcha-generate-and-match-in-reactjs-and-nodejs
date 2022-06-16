
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    text: {type: String},
    code: {type: String}
})

const Post = mongoose.model("capcha", postSchema);

module.exports = Post;