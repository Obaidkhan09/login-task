import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button"

export default function SignUp() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{ width : '60%' }}>
        <h4>Sign Up</h4>
        <Grid container>
          <Grid item xs={12}>
            <Typography align='left'>
              Enter Email
            </Typography>
            <TextField
              hiddenLabel
              id="email"
              variant="filled"
              size="small"
              placeholder='Email'
              fullWidth
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
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            style={{
              color : '#E62E2D',
              fontWeight : 600,
              marginTop : 20,
              border : "1px solid #E62E2D"
              }}
              >
                Sign Up
              </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}