import React from 'react';
import { Avatar, CssBaseline, TextField, InputAdornment } from '@material-ui/core';
import { Grid, Container, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import useStyles from './styles';

const SignUp = (props) => {
  const classes = useStyles();
  const { auth, authError, newUser, handleChange } = props;

  const passwordDoesNotMatch = (newUser.password !== newUser.passwordRetype);
  var errorMessage = (passwordDoesNotMatch ? classes.errorMessage : classes.hideError);

  // const handleClick = e => {
  //   e.preventDefault();
  //   signUp(newUser);
  // }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Grid>
      </Grid>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineOutlinedIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="passwordRetype"
              label="Re-type Password"
              type="password"
              id="passwordRetype"
              onChange={handleChange}
              error={passwordDoesNotMatch}
            />
            <Typography variant="caption" className={errorMessage}>
              Passwords do not match
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item className={classes.hasAccountText}>
            Already have an account?{' '}
            <Link to="/signin" variant="body2" style={{ color: 'mediumblue' }}>
              Sign in
            </Link>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            {authError ? <p>{authError}</p> : null}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => (dispatch(signUp(credentials)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);