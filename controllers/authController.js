const User = require('../models/User')

const handleError = (err) => {

    const errors = { email:'', password:'' }

    if(err.code === 11000) {

        errors.email =  'The email is already registered'

        return errors

    }

    if(err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach( ( { properties }) => {

            errors[properties.path] = properties.message

        } ) 

        return errors

    }  

}

module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.signup_post = (req, res) => {
    res.send('post sign up')
}

module.exports.login_get = async(req, res) => {

    res.render('login')

}

module.exports.login_post = async(req, res) => {
    
    const { email, password } = req.body
    
    try {

        const user = await User.create({
            email,
            password
        })

        res.status(201)
           .send(user)
        
    } catch (err) {

        console.log('errors', err)
        const errors = handleError(err)

        res.status(400)
           .json({ errors })
    }
}

