import { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Button from '@mui/material/Button'


import "../styles/home.css"

export default function Home() {
    const [inn, setIn] = useState(true);
    const [widthSize, setWidthSize] = useState('400px');
    const handleSignIn = () => {
        setIn(true);
    }
    const handleSignUp = () => {
        setIn(false);
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className='home'
                style={{
                    width: `${widthSize}`,
                    height: 400
                }}
            >
                <h3>Welcome to Todo App</h3>
                <div className="btn-grp"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <div>
                        <Button style={{
                            color: '#E62E2D',
                            fontWeight : 600,
                            border : "1px solid #E62E2D"
                        }}
                            onClick={() => handleSignIn() }
                        >
                            Sign In
                        </Button>
                    </div>
                    <div>
                        <Button
                            style={{
                                color: '#E62E2D',
                                fontWeight : 600,
                                border : "1px solid #E62E2D"
                            }}
                            onClick={()=> {setIn(false)} }
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                {inn ?
                    <SignIn /> :
                    <SignUp />
                }
            </div>
        </div>
    )
}
