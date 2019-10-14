import React, { Component, Fragment } from 'react';
import CheckoutForm from '../../components/CheckoutForm';

class Checkout extends Component {
  state = {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    saveAddress: false,
    nameOnCard: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    savePayment: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const state = { ...this.state }
    return (
      <Fragment>
        <CheckoutForm formDetails={state} handleChange={this.handleChange.bind(this)} />
      </Fragment>
    )
  }
}

export default Checkout;