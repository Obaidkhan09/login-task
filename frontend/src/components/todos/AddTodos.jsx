import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import axios from '../../constants/constants'

export default function AddTodos() {
    const [ task, setTask ] = useState({
        name : "",
        isComplete : false,
    });
    const handleChange = (e) => {
        setTask({ ...task, name : e.target.value, date : new Date() })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/todos', task);
        setTask({
            name : '',
            isComplete : false,
        });
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}
        >
            <div style={{ width: '90%', display: 'flex', justifyContent : 'space-between' }}>
                <TextField
                    hiddenLabel
                    id="email"
                    variant="filled"
                    size="small"
                    placeholder='Enter Task'
                    fullWidth
                    autoFocus
                    value={task.name}
                    onChange={handleChange}
                />
                <Button
                    style={{
                        color: '#E62E2D',
                        padding : 0,
                        maxWidth : 10
                    }}
                    onClick={ handleSubmit }
                >
                    <AddCircleOutlineIcon/>
                </Button>
            </div>
        </div>
    )
}
