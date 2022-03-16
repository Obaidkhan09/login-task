import { useEffect, useState } from 'react';
import AddTodos from './AddTodos'
import ListTodos from './ListTodos';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../features/authSlice';

export default function Todos() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [widthSize, setWidthSize] = useState('40%');
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false
  });
  const handleSignOut = () => {
    dispatch(signOut());
  }
  if(!auth._id) {
    return <Navigate to='/' />
  }
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div className='home'
          style={{
            width: `${widthSize}`,
            minHeight: 400
          }}
        >
          <h3>Welcome User</h3>
          <Button
            style={{
              color: '#E62E2D',
              fontWeight: 600,
              marginTop: 5,
              marginBottom: 20,
              border: "1px solid #E62E2D"
            }}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </Button>
          <AddTodos todo={todo} setTodo={setTodo} />
          <ListTodos rodo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  )
}
