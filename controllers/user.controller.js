
const userModel = require('../models/user.model.js')
const validator = require('../config/schema.config.js')

/** bcrypt */
const bcrypt = require('bcrypt');
const saltRounds = 10;

/** jwt */
var jwt = require('jsonwebtoken');

exports.insert = (req,res) => {
    var test = validator.v.validate(req.body, validator.userSchema)
    /** Check valid JSON Object */
    if (test.valid) {
        /** Hash password */
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                req.body.password = hash
                /** Check if user exists */
                userModel.userExists(req.body.username)
                    .then((result) => {
                        if(result == null) {
                            /** Create user */    
                            userModel.createUser(req.body)
                                .then((result) => {
                                    res.status(201).send({id: result})
                                })
                                .catch(err => { 
                                    res.status(500).send('Internal server error : '+err)
                                })
                        } else {
                            res.status(409).send('User already exists')
                        }
                    })
                    .catch(err => { 
                        res.status(500).send('Internal server error : '+err)
                    })
            })
        })
    } else {
        res.status(400).send('Incorrect JSON Body')
    }
}

exports.login = (req, res) => {
    var test = validator.v.validate(req.body, validator.userSchema)
    if (test.valid) {
        userModel.getHash(req.body.username)
            .then((result) => {
                bcrypt.compare(req.body.password, result, function(err, correct) {
                    if(correct) {
                        try {
                            const token = jwt.sign({ username: req.body.username }, process.env.JWT_SECRET)
                            res.status(201).send({accessToken: token})
                        } catch (error) {
                            res.status(500).send('Internal server error : '+error)
                        }
                    }
                })  
            })
            .catch(err => { 
                res.status(500).send('Internal server error : '+err)
            })
    } else {
        res.status(400).send('Incorrect JSON Body')
    }
}