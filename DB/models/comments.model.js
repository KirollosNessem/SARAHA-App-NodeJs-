const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // post: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post',
    //     required: true
    // }
})

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;