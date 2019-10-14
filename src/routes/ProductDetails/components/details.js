import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AddToCartButton from '../../../components/AddToCartButton';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../styles';

const Details = (props) => {
  const classes = useStyles();
  const { product, inCart, cart } = props;
  const ratingCount = 26;

  if (product) {
    return (
      <Grid container direction="column">
        <Grid container direction="row" className={classes.row} spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={product.img} alt="product" height="auto" width="80%" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
              </Grid>
              <Grid item>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Rating precision={0.1} value={product.rating} readOnly />
                  <Typography variant="caption" style={{ fontSize: '.9em' }}>
                    {product.rating} ({ratingCount})
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom className={classes.detailText}>
                  ${product.price}
                </Typography>
              </Grid>
              <Grid item>
                <AddToCartButton inCart={inCart(cart, product.id)} item={product} />
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.detailTitle}>
                  Details
                </Typography>
                <ul className={classes.detailText}>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Sed do eiusmod tempor incididunt ut labore</li>
                </ul>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.detailTitle}>
                  Shipping
                </Typography>
                <ul className={classes.detailText}>
                  <li>Available for in-store pickup</li>
                  <li>Delivery within 1-2 days</li>
                </ul>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.detailTitle}>
                  Warnings
                </Typography>
                <Typography variant="body1" className={classes.detailText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}

export default Details;
