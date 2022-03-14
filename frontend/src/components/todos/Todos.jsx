import { useState } from 'react';
import AddTodos from './AddTodos'
import ListTodos from './ListTodos'

export default function Todos() {
  const [widthSize, setWidthSize] = useState('40%');
  const [todo, setTodo] = useState({
    name:"",
    isComplete:false
  });
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
          <AddTodos todo={todo} setTodo={setTodo} />
          <ListTodos rodo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  )
}
