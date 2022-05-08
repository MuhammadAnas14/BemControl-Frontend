import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';
import {useNavigate} from 'react-router-dom';
// import authentication from './auth';
import './CSS/layout.css'
import axios from 'axios';


const theme = createTheme({
  palette:{
    primary:{main: '#f6c453'},
    secondary:{main:'#183a1d'},
  }
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    border: '0 14px 80px rgb(34 35 58 / 20%)',
  },
  inputF:{

  },
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup: {
    margin: theme.spacing(-2, 0, 2),
  },
  error: {
    color: "red",
    fontSize:10,
  }
}));



const  SignIn  = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errortext, setErrortext] = useState('');

  let history = useNavigate();

  const loginSubmit = (event) => {
    event.preventDefault();

    let data = {
      email: email,
      password: password,
    };
    

    axios.post("http://localhost:5000/api/v1/users/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response)=>{
      console.log(response)
      setErrortext("Log In Success")
      history('/Dashboard')

    })
    .catch((error) => {
      console.log(error)

    })
  };
  const classes = useStyles();

   const handleSignUp = () => {

    history('/SignUp')
  }


  return (
    <MuiThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
      <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
      > 
       
      </Grid>
        
        <Typography component="div">
          <Box color="black" marginBottom={1} fontFamily="ui-monospace" fontSize={30} fontWeight={600} m={-2}>
              SIGN IN
          </Box>
        </Typography>
        
        {errortext != '' ? (
              <p className={classes.error}>
                {errortext}
              </p>
            ) : null}
        <form className={classes.form} noValidate onSubmit={loginSubmit}>
          <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
          >
            <Grid item xs={9}>
              <TextField
                className={classes.inputF}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(ev) => setemail(ev.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={9}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(ev) => setpassword(ev.target.value)}
              autoComplete="current-password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
              }}
              />
            </Grid>

              
            <Grid item xs={9} >
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              m={0}
              >
                Sign In
              </Button>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2" color="secondary" >
                Forgot your password?
              </Link>
            </Grid>

            <Grid item xs={9} >
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleSignUp}
              m={0}
              >
                Dont have a account ! Create It
              </Button>
            </Grid>


          </Grid>

          
        </form>
      </div>
    </Container>
    </MuiThemeProvider>
  );
}

export default SignIn




