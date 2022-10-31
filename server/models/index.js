const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }
);

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        posts: [postSchema],
    },
);

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    Post, User
} 
