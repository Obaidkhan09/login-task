import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodosState, todosFetch } from '../../features/todoSlice';

import moment from "moment"
import axios from '../../constants/constants';


function ListTodos({ todo, setTodo }) {
    const dispatch = useDispatch();
    const todoState = useSelector(getTodosState);
    useEffect(() => {
        dispatch(todosFetch());
    }, []);

    const handleUpdate = (id)=> {
        const findId = todoState.find((item) => item._id == id);
        setTodo({...findId});
    }
    const handleComplete = async(id) => {
        await axios.patch(`/api/todos/${id}`);
        dispatch(todosFetch());
        
    }
    const handleDelete = async(id) => {
        await axios.delete(`/api/todos/${id}`);
        dispatch(todosFetch());
    }
    return (
        <div style={{ marginTop: 30, marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '90%' }}>
                <Typography variant='h6' align='center'>
                    List of Tasks
                </Typography>
                {todoState ? todoState.map((items, index) => (
                    <div key={items._id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 30,
                        borderBottom: `${items.isComplete ? "3px solid green" : "3px solid #E62E2D" }`,
                        padding: 7,
                        boxShadow: '0px 2px 5px rgb(0,0,0, 0.5)'
                    }}>
                        <div>
                            <Typography align='left' style={{ textDecoration : `${items.isComplete ? 'line-through' : "none" }` }}>
                                {items.task}
                            </Typography>
                            <Typography align='left' style={{ color: '#494F55', fontSize: 12 }}>
                                Author : {items.author}
                            </Typography>
                            <Typography align='left' style={{ color: '#494F55', fontSize: 12 }}>
                                Added : { moment(items.date).fromNow() }
                            </Typography>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <Button size='small' onClick={()=> handleUpdate(items._id) } style={{ color: 'blue' }}><EditIcon /></Button>
                            <Button size='small' onClick={()=> {handleComplete(items._id)}} style={{ color: 'green' }}><CheckCircleOutlineIcon /></Button>
                            <Button size='small' onClick={()=> {handleDelete(items._id)}} style={{ color: 'red' }}><HighlightOffIcon /></Button>
                        </div>
                    </div>
                )) : <></>}
            </div>
        </div>
    )
}

export default ListTodos
