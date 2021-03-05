 const { isEmail  }= require('validator')

const mongoose = require('mongoose')

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

const User = mongoose.model('user', userSchema)

module.exports = User