import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import axios from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux';
import { todosFetch } from '../../features/todoSlice';
import { toast } from "react-toastify";

export default function AddTodos({ todo, setTodo }) {
    const auth = useSelector((state) => state.auth);
    // const [task, setTask] = useState({
    //     name: "",
    //     isComplete: false,
    // });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (todo._id) {
                const id = todo._id;
                const updatedTodo = {
                    task: todo.task,
                    isComplete: false,
                    date: todo.date,
                    author: auth.name,
                    uid: todo.uid
                }
                await axios.put(`/api/todos/${id}`, updatedTodo);
                setTodo({
                    task: '',
                    isComplete: false,
                });
                dispatch(todosFetch());
            }
            else {
                const newTodo = {
                    ...todo,
                    date: new Date(),
                    author: auth.name,
                }
                await axios.post('/api/todos', newTodo);
                setTodo({
                    task: '',
                    isComplete: false,
                });
                dispatch(todosFetch());
            }
        } catch (error) {
            toast.error(`${error.response.data}`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme : 'colored'
                });
        }

    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}
        >
            <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    hiddenLabel
                    id="email"
                    variant="filled"
                    size="small"
                    placeholder='Enter Task'
                    fullWidth
                    autoFocus
                    value={todo.task}
                    onChange={handleChange}
                />
                <Button
                    style={{
                        color: '#E62E2D',
                        padding: 0,
                        maxWidth: 10
                    }}
                    onClick={handleSubmit}
                >
                    <AddCircleOutlineIcon />
                </Button>
            </div>
        </div>
    )
}
