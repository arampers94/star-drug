import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { CssBaseline, TextField, InputAdornment } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const BillingInfo = (props) => {
  const classes = useStyles();
  const { paymentInfo, handleChange } = props;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            Billing Information
          </Typography>
        </Grid>
      </Grid>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              value={paymentInfo.address1}
              fullWidth
              autoComplete="billing address-line1"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              value={paymentInfo.address2}
              fullWidth
              autoComplete="billing address-line2"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              value={paymentInfo.city}
              fullWidth
              autoComplete="billing address-level2"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              value={paymentInfo.state}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="apt"
              name="apt"
              label="Apartment #"
              value={paymentInfo.apt}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip code"
              value={paymentInfo.zip}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              value={paymentInfo.cardNumber}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cardName"
              name="cardName"
              label="Name on card"
              value={paymentInfo.cardName}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="expDate"
              name="expDate"
              label="Expiration date"
              value={paymentInfo.expDate}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              value={paymentInfo.cvv}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default BillingInfo;
