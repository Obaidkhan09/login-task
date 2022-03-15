import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signUp } from '../../features/authSlice';
import axios from '../../constants/constants';

export default function SignUp() {

  const auth = useSelector(state => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const token = await axios.post('/api/signup', user);
    console.log(token.data);
    dispatch(signUp(token.data))
    setUser({
      name: "",
      email: "",
      password: ""
    })
  }
  useEffect(()=>{
    console.log(auth);
  }, [auth]);

  if (auth._id) { return <Navigate to="/todos" />}
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 30 }}>
      <div style={{ width: '60%' }}>
        <h4>Sign Up</h4>
        <Grid container>
          <Grid item xs={12}>
            <Typography align='left'>
              Enter Name
            </Typography>
            <TextField
              hiddenLabel
              id="name"
              variant="filled"
              size="small"
              placeholder='Name'
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align='left' mt={2}>
              Enter Email
            </Typography>
            <TextField
              hiddenLabel
              id="email"
              variant="filled"
              size="small"
              placeholder='Email'
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align='left' mt={2}>
              Enter Password
            </Typography>
            <TextField
              hiddenLabel
              id="password"
              variant="filled"
              size="small"
              placeholder='Password'
              type="password"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                color: '#E62E2D',
                fontWeight: 600,
                marginTop: 20,
                border: "1px solid #E62E2D"
              }}
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}