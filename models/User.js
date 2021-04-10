const { isEmail  } = require('validator')

const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({

    email: {

        type: String,

        required: [true, "Email is required"],

        unique: true,

        lowercase: true,

        validate:[isEmail, 'Please enter a valid email']

    },

    password: {

        type: String,

        required: [true, 'Password is required'],

        minlength: [6, 'Password should be 6 characters or more']
    }
})

userSchema.pre('save', async function(next) {

    const salt = await bcrypt.genSalt()

    this.password = await bcrypt.hash(this.password, salt)

    next()

})

const User = mongoose.model('user', userSchema)

module.exports = User