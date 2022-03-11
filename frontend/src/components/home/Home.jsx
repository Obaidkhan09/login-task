import { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Button from '@mui/material/Button'


import "../styles/home.css"

export default function Home() {

    const [ inn, setIn ] = useState(true);
    const [ widthSize, setWidthSize ] = useState('40%');
    const [ innBorder, setInnBorder ] = useState('1px solid #E62E2D');
    const [ uppBorder, setUppBorder ] = useState('none');
    const [ innBgClr, setInnBgClr ] = useState('#E62E2D');
    const [ uppBgClr, setUppBgClr ] = useState('white');
    const [ innFntClr, setInnFntClr ] = useState('white');
    const [ uppFntClr, setUppFntClr ] = useState('#E62E2D');

    const handleSignIn = () => {
        setIn(true);
        setInnBorder('1px solid #E62E2D');
        setUppBorder('none');
        setInnBgClr('#E62E2D');
        setUppBgClr('white');
        setInnFntClr('white');
        setUppFntClr('#E62E2D');
    }

    const handleSignUp = () => {
        setIn(false);
        setUppBorder('1px solid #E62E2D');
        setInnBorder('none');
        setInnBgClr('white');
        setUppBgClr('#E62E2D');
        setInnFntClr('#E62E2D');
        setUppFntClr('white');

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
                            color: `${innFntClr}`,
                            backgroundColor : `${innBgClr}`,
                            fontWeight : 600,
                            border : `${innBorder}`
                        }}
                            onClick={() => handleSignIn() }
                        >
                            Sign In
                        </Button>
                    </div>
                    <div>
                        <Button
                            style={{
                                color: `${uppFntClr}`,
                                backgroundColor : `${uppBgClr}`,
                                fontWeight : 600,
                                border : `${uppBorder}`
                            }}
                            onClick={()=> handleSignUp() }
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
