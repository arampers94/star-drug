import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Review from './review';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emptyCart } from '../../store/actions/productActions';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Amar Rampersaud '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  backToShopButton: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const CheckoutForm = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { formDetails, handleChange } = props;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formDetails={formDetails} handleChange={handleChange.bind(this)} />;
      case 1:
        return <PaymentForm formDetails={formDetails} handleChange={handleChange.bind(this)} />;
      case 2:
        return <Review formDetails={formDetails} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const RemoveItems = () => {
    const { emptyCart } = props;
    emptyCart();
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
    if (activeStep >= 2) {
      RemoveItems();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
                <Container className={classes.backToShopButton}>
                  <Link to="/shop">
                    <Button variant="contained" color="primary" size="small">
                      Continue shopping
                    </Button>
                  </Link>
                </Container>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => (dispatch(emptyCart()))
  }
}


export default connect(null, mapDispatchToProps)(CheckoutForm);