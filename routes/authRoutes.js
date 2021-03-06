const express = require('express')

const router = express.Router()

const { login_get,
        login_post, 
        signup_get, 
        signup_post
      } = require('../controllers/authController')

router.get('/signup', signup_get)

router.post('/signup', signup_post)

router.get('/login', login_get)

router.post('/login', login_post)


module.exports = router