import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import UsersSchema from '../models/UsersSchema.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Working...!');
});

router.post('/', async(req, res) => {
    const schema = Joi.object({
        name : Joi.string().min(3).max(50).required(),
        email : Joi.string().min(8).max(100).email().required(),
        password : Joi.string().min(5).max(100).required(),
    });
    const { error } = await schema.validate( req.body );
    if (error) {
        return res.status(422).send('Data Validation Error for Post : ', error.details[0].message);
    }
    try {
        const temp = await UsersSchema.findOne({ email : req.body.email });
        if (temp) {
            return res.status(409).send('User Already Exists.');
        }
        
        const { name, email, password } = req.body;
        let user = new UsersSchema({
            name,
            email,
            password,
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        user.save();
        res.status(201).send("User is created Successfully.");
    } catch (error) {
        res.status(404).send('Error Occured..! : ', error.message);
    }
})

export default router;