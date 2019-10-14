import React, { useState, Fragment } from 'react';
import { Container, Stepper, Step, StepLabel, CssBaseline, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import BillingInfo from './billingInfo';
import SignUp from './signup';
import useStyles from './styles';
import { Button, Paper, Typography, Box } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Amar Rampersaud '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const SignUpForm = (props) => {
  const classes = useStyles();
  const { auth, authError, signUp } = props;
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Sign up', 'Billing Information'];
  const [newUser, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRetype: ''
  });

  const [paymentInfo, setPayment] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    apt: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvv: '',
  })

  const passwordDoesNotMatch = (newUser.password !== newUser.passwordRetype);
  var errorMessage = (passwordDoesNotMatch ? classes.errorMessage : classes.hideError);

  // // Conditions for unlocking the sign up button
  var showSubmitButton = (
    newUser.firstName.length > 1 &&
    newUser.lastName.length > 1 &&
    newUser.email.length > 1 &&
    newUser.password.length >= 8 &&
    passwordDoesNotMatch === false
  )

  if (auth.uid) return <Redirect to="/" />;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleUserChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setValues({ ...newUser, [name]: value });
  }

  const handlePaymentChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setPayment({ ...paymentInfo, [name]: value });
  }

  const handleClick = e => {
    e.preventDefault();
    signUp(newUser);
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SignUp newUser={newUser} handleChange={handleUserChange.bind(this)} />
      case 1:
        return <BillingInfo paymentInfo={paymentInfo} handleChange={handlePaymentChange} />
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create New Account
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          <Grid container justify="flex-end" className={classes.buttons}>
            <Grid item>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              {activeStep === 0 && (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={handleClick}
                  disabled={!showSubmitButton}
                >
                  Sign up now
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box mt={5}>
          <Copyright />
        </Box>
      </main>
    </Fragment>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
