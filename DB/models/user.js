const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    ,
    password: {
        type: String,
        required: true
    },
    age: Number,
    phone: String,
    profilePic: String,
    caverpics:Array,
    loginStatus: { type: Boolean, default: false },
    lastseen: { type: String },
    confirmEmail: { type: Boolean, default: false },
    role: { type: String, default: 'User' },
}, {
    timestamps: true
})


userSchema.pre('save', async function (next) {
    this.password = await bycrpt.hash(this.password, parseInt(process.env.saltRound))
    next()
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel