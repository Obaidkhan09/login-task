import express from "express";
import Joi from "joi";
import auth from "../middleware/auth.js";
import TodosSchema from "../models/TodosSchema.js";

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const todo = await TodosSchema.find().sort({ date: -1 });
        console.log(req.user);
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).send("An Error Occurred: ", error.message);
    }
});
router.post('/', async (req, res) => {
    const schema = Joi.object({
        task: Joi.string().min(3).max(50).required(),
        author: Joi.string().min(3).max(30),
        uid: Joi.string(),
        isComplete: Joi.boolean(),
        date: Joi.date(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { task, author, uid, isComplete, date } = req.body;
    let todo = new TodosSchema({
        task,
        author,
        uid,
        isComplete,
        date
    });
    todo = await todo.save()
        .then(() => {
            res.status(201).send(todo);
        })
        .catch((error) => {
            res.status(500).send('Error in Sending Request to Server :', error.message);
        })
});

router.delete('/:id', async (req, res) => {
    try {
        const todo = await TodosSchema.findById(req.params.id);
        if (!todo) {
            return res.status(404).send('No Such ID Found.');
        }
        const deleteTodo = await TodosSchema.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteTodo);
    } catch (error) {
        res.status(500).send('Following Error is Occurred: ', error.message);
    }
});

router.put('/:id', async (req, res) => {
    const schema = Joi.object({
        task: Joi.string().min(3).max(30).required(),
        author: Joi.string().min(3).max(30),
        uid: Joi.string(),
        isComplete: Joi.boolean(),
        date: Joi.date(),
    });

    const { error } = await schema.validate(req.body);
    if (error) {
        return res.status(400).send("Error Occurred During Validation : ", error.details[0].message);
    }

    try {
        const putTodo = await TodosSchema.findById(req.params.id);
        if (!putTodo) {
            return res.status(404).send('No Such File or Location exists.');
        }

        const { task, author, uid, isComplete, date } = req.body;
        const updateTodo = await TodosSchema.findByIdAndUpdate(req.params.id, {
            task,
            author,
            uid,
            isComplete,
            date,
        },
            { new: true });

        if (updateTodo) {
            return res.status(200).send(updateTodo);
        }
    } catch (error) {
        return res.status(402).send("Server Error Occured", error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const todo = await TodosSchema.findById(req.params.id);
        if (!todo) {
            return res.status(404).send('ID is not found.');
        }
        const updateTodo = await TodosSchema.findByIdAndUpdate(req.params.id, {
            isComplete: !todo.isComplete,
        });
        return res.status(200).send(updateTodo)
    } catch (error) {
        return res.status(500).send("Server Error: ", error.message);
    }
})
export default router;