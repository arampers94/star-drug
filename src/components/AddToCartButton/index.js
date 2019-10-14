import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/productActions';
import { showSnackbar } from '../../store/actions/snackbarActions';

const AddToCartButton = (props) => {
  const { inCart, item, addToCart, showSnackbar } = props;
  const [isInCart, setInCart] = useState(inCart);

  const handleClick = (id, img, name, price) => {
    const message = 'Item added to cart';
    addToCart(id, img, name, price);
    setInCart(true);
    showSnackbar(message, id);
  }

  if (isInCart) {
    return <p style={{ color: 'green', margin: '5px 0' }}>In cart</p>
  } else {
    return (
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => handleClick(item.id, item.img, item.name, item.price)}
      >
        Add to Cart
      </Button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, img, name, price) => (dispatch(addToCart(id, img, name, price))),
    showSnackbar: (message, id) => (dispatch(showSnackbar(message, id)))
  }
}

export default connect(null, mapDispatchToProps)(AddToCartButton);
