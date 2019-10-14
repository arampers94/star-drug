import React, { Component, Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Content from './components/content';
import MobileCart from './components/mobileCart';

export class ShoppingCart extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        {/* <MobileCart /> */}
      </Fragment>
    )
  }
}

export default ShoppingCart;
