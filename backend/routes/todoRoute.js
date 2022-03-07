import express from "express";
import Joi from "joi";
import TodosSchema from "../models/TodosSchema.js";

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).send('This Route is Working');
});
router.post('/', async(req, res) => {
    const schema = Joi.object({
        name : Joi.string().min(3).max(30).required(),
        author : Joi.string().min(3).max(30),
        uid : Joi.string,
        isComplete : Joi.boolean(),
        date : Joi.date(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { name, author, uid, isComplete, date } = req.body;
    let todo = new TodosSchema({
        name,
        author,
        uid,
        isComplete,
        date
    });
    todo = await todo.save()
    .then( ()=>{
        res.status(201).send(todo);
    })
    .catch( (err) => {
        res.status(500).send('Error in Sending Request to Server :', err);
    })
});
export default router;