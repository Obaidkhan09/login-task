import express from "express";
import Joi from "joi";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UsersSchema from "../models/UsersSchema.js";

const router = express.Router();

router.post('/', async(req, res) => {
    console.log(req.body);
    const schema = Joi.object({
        email: Joi.string().min(8).max(100).email().required(),
        password: Joi.string().min(5).max(100).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error.details[0].message)
        return res.status(422).send(error.details[0].message)
    }
    try {
        const user = await UsersSchema.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User or Email does not exists.');
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        console.log(validPassword)
        if (!validPassword) {
            return res.status(401).send("Invalid Password");
        }
        const secretKey = process.env.SECRET;
        const token = jwt.sign( { _id : user._id, name : user.name, email : user.email }, secretKey );
        res.status(201).send(token);
    } catch (error) {
        res.status(422).send('Error Occured', error.message);
    }
})

export default router;