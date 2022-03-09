import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import todoRouter from './routes/todoRoute.js';
import signupRouter from './routes/signupRoute.js';
import signinRouter from './routes/signInRoute.js'


//Config Server
const app = express();
const port = process.env.PORT || 5000;
const connection_url = `mongodb+srv://tinderadmin:${process.env.REACT_APP_PASSWORD}@cluster0.g0dgp.mongodb.net/toDoApp?retryWrites=true&w=majority`

//middleware
app.use(express.json());
app.use(cors());
    //Router endpoints
app.use('/api/todos', todoRouter);
app.use('/api/signup', signupRouter);
app.use('/api/signin', signinRouter);
//Config DB
mongoose.connect(connection_url)
.then( ()=> console.log('Connected to DB Successfully.'))
.then( ()=> app.listen(port, ()=> {console.log(`Listening on port ${port}`)}))
.catch( (err)=> console.log(err))
//Endpoints
app.get('/', (req, res) => {
    res.status(200).send('To Do List Backend is Live.');
});
