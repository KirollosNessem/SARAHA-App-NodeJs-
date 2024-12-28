const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    commentsIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const postmodel = mongoose.model('Post', postSchema);

module.exports = postmodel;