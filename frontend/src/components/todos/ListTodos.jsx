import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodosState, todosFetch } from '../../features/todoSlice';


function ListTodos() {
    const dispatch = useDispatch();
    const todoState = useSelector(getTodosState);
    useEffect(()=>{
        dispatch(todosFetch());
    }, []);
    console.log(todoState)
    return (
        <div style={{ marginTop: 30, marginBottom : 30, display : 'flex', justifyContent : 'center'}}>
            <div style={{ width: '90%' }}>
                <Typography variant='h6' align='center'>
                    List of Tasks
                </Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    borderBottom: '2px solid #E62E2D',
                    padding: 7,
                    boxShadow: '0px 2px 5px rgb(0,0,0, 0.5)'
                }}>
                    <div>
                        <Typography align='left'>
                            List of Tasks
                        </Typography>
                        <Typography align='left' style={{ color: '#494F55', fontSize: 12 }}>
                            Author : Obaid
                        </Typography>
                        <Typography align='left' style={{ color: '#494F55', fontSize: 12 }}>
                            Added : 15 hours ago
                        </Typography>
                    </div>
                    <div style={{ marginTop : 10 }}>
                        <Button size='small' style={{color:'blue'}}><EditIcon /></Button>
                        <Button size='small' style={{color:'green'}}><CheckCircleOutlineIcon /></Button>
                        <Button size='small' style={{color:'red'}}><HighlightOffIcon /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListTodos
