import React from 'react';
import Grid from '@material-ui/core/Grid';
import Details from './components/details';
import Reviews from './components/reviews';
import Footer from '../../components/Footer';
import useStyles from './styles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import productTypes from '../../store/types/productTypes';
import Paper from '@material-ui/core/Paper'

const ProductDetails = (props) => {
  const { product, cart } = props;
  const classes = useStyles();

  // Search the cart to see if the currently viewed item is in it
  const inCart = (cart, id) => {
    const productId = id;
    console.log('Product id ' + productId);
    const found = (cart.find(item => item.id === productId) ? true : false);
    console.log('Result of search: ' + found);
    return found;
  }

  if (product) {
    return (
      <Paper>
        <Grid container direction="column" className={classes.detailsGrid}>
          <Grid item>
            <Details product={product} cart={cart} inCart={inCart.bind(this)} />
          </Grid>
          <Grid item>
            <Reviews />
          </Grid>
        </Grid>
        <Footer />
      </Paper>
    )
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  if (product) {
    product.id = id;
  }

  return {
    product: product,
    cart: state.items.cart
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(ProductDetails);