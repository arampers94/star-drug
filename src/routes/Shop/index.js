import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Sidebar from './components/sidebar';
import PromoBanner from './components/promoBanner';
import ProductList from './components/productList';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';

import Grid from '@material-ui/core/Grid';
import useStyles from './styles/styles'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Shop = (props) => {
  const classes = useStyles();
  const { products, cart, filter } = props;
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(!update);
  }

  const inCart = (cart, id) => {
    const productId = id;
    const found = (cart.find(item => item.id === productId) ? true : false);
    return found;
  }

  if (products) {
    products.forEach((item, index) => {
      item.inCart = false;
    })
    return (
      <div>
        <Grid container className={classes.root}>
          <Hidden xsDown>
            <Grid item>
              <Sidebar products={products} handleUpdate={handleUpdate.bind(this)} />
            </Grid>
          </Hidden>
          <Grid item xs={12} className={classes.products}>
            {/* <Grid item className={classes.promoBanner}>
              <PromoBanner />
            </Grid> */}
            <Grid item className={classes.productList}>
              <ProductList products={products} filter={filter} inCart={inCart.bind(this)} cart={cart} />
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <div className={classes.spinner}>
          <CircularProgress disableShrink color="primary" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    cart: state.items.cart,
    filter: state.items.filter
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Shop);