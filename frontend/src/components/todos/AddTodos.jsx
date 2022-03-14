import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import axios from '../../constants/constants'
import { useDispatch } from 'react-redux';
import { todosFetch } from '../../features/todoSlice';

export default function AddTodos({ todo, setTodo }) {
    // const [task, setTask] = useState({
    //     name: "",
    //     isComplete: false,
    // });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTodo({ ...todo, name: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (todo._id) {
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: false,
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }

            await axios.put(`/api/todos/${id}`, updatedTodo);
            dispatch(todosFetch());
        }
        else {
            const newTodo={
                ...todo,
                date : new Date()
            }
            await axios.post('/api/todos', newTodo);
            setTodo({
                name: '',
                isComplete: false,
            });
            dispatch(todosFetch());
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
                    value={todo.name}
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
