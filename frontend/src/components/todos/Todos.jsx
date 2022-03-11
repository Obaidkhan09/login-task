import { useState } from 'react';
import AddTodos from './AddTodos'
import ListTodos from './ListTodos'

export default function Todos() {
  const [inn, setIn] = useState(true);
  const [widthSize, setWidthSize] = useState('40%');
  const handleSignIn = () => {
    setIn(true);
  }
  const handleSignUp = () => {
    setIn(false);
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
          <AddTodos />
          <ListTodos />
        </div>
      </div>
    </div>
  )
}
