import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../../store/actions/productActions';
import { Link } from 'react-router-dom';

import useStyles from '../styles/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../../themes';
import EmptyCartPic from '../../../images/undraw_empty_cart_co35.svg';

const TAX_RATE = .045;
const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const formatPrice = (num) => {
  return num.toFixed(2);
}

const calculateTax = (subtotal, tax_rate) => {
  const tax = subtotal * tax_rate;
  return tax;
}

const orderTotal = (subtotal, tax, shipping) => {
  const finalTotal = subtotal + tax + shipping;
  return formatPrice(finalTotal);
}

const Content = (props) => {
  const classes = useStyles();
  let subtotal = 0.0;
  console.log(props);
  const { cart, total, shipping, updateQuantity, removeFromCart } = props;

  const handleChange = (id, event) => {
    updateQuantity(id, event.target.value);
  }

  const handleRemove = (id) => {
    removeFromCart(id);
  }

  let addedItems = cart.length ?
    (
      <ThemeProvider theme={theme}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h2">Shopping Cart</Typography>
              </TableCell>
              <Hidden xsDown>
                <TableCell align="right">
                  <Typography variant="h6">Price</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Quantity</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Total</Typography>
                </TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item, index) => {
              const formattedPrice = formatPrice(item.price);
              const total = item.price * item.quantity;
              const formattedTotal = formatPrice(total);
              subtotal += total;

              return (
                <TableRow key={index}>
                  <TableCell>
                    <Grid container direction="row" spacing={4}>
                      <Grid item>
                        <img className="cart-img" src={item.img} alt="pic" height={200} width={200} />
                      </Grid>
                      <Grid item>
                        <Grid item>
                          <Typography variant="h6">{item.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">{item.availability}</Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            name={index}
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell align="right">
                    <Typography variant="h6">${formattedPrice}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Grid container direction="row" justify="flex-end">
                      <Select
                        value={item.quantity}
                        onChange={(event) => handleChange(item.id, event)}
                      >
                        {options.map((quantity, index) => {
                          return (
                            <MenuItem value={quantity} key={index}>{quantity}</MenuItem>
                          )
                        })}
                      </Select>
                    </Grid>
                  </TableCell>

                  <Hidden xsDown>
                    <TableCell align="right">
                      <Typography variant="h6">${formattedTotal}</Typography>
                    </TableCell>
                  </Hidden>
                </TableRow>
              )
            })}

            <TableRow>
              <Hidden xsDown>
                <TableCell rowSpan={4} />
              </Hidden>
              <Hidden xsDown>
                <TableCell colSpan={2}>Subtotal</TableCell>
              </Hidden>
              <Hidden smUp>
                <TableCell>Subtotal</TableCell>
              </Hidden>
              <TableCell align="right">${formatPrice(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <Hidden xsDown>
                <TableCell colSpan={2}>Tax</TableCell>
              </Hidden>
              <Hidden smUp>
                <TableCell>Tax</TableCell>
              </Hidden>
              <TableCell align="right">${formatPrice(calculateTax(subtotal, TAX_RATE))}</TableCell>
            </TableRow>
            <TableRow>
              <Hidden xsDown>
                <TableCell colSpan={2}>Shipping</TableCell>
              </Hidden>
              <Hidden smUp>
                <TableCell>Shipping</TableCell>
              </Hidden>
              <TableCell align="right">${formatPrice(shipping)}</TableCell>
            </TableRow>
            <TableRow>
              <Hidden xsDown>
                <TableCell colSpan={2}>
                  <Typography variant="h6">
                    Order Total
                  </Typography>
                </TableCell>
              </Hidden>
              <Hidden smUp>
                <TableCell>
                  <Typography variant="h6">
                    Order Total
                  </Typography>
                </TableCell>
              </Hidden>
              <TableCell align="right">
                <Typography variant="h6">
                  ${orderTotal(total, calculateTax(subtotal, TAX_RATE), shipping)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid container justify="flex-end" className={classes.checkoutButtonContainer}>
          <Grid item>
            <Link to='/checkout'>
              <Button variant="contained" color="primary">Checkout</Button>
            </Link>
          </Grid>
        </Grid>
      </ThemeProvider>
    ) : (
      <Grid container justify="center" align="center" direction="column" className={classes.emptyCart}>
        <Grid item>
          <Typography variant="h3" gutterBottom className={classes.emptyCartText}>
            Looks like your cart is empty...
          </Typography>
          <Link to="/shop">
            <Button variant="outlined" color="primary" size="small">
              Back to Shop
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <img src={EmptyCartPic} width="60%" alt="empty-cart-svg" />
        </Grid>
      </Grid>
    )

  return (
    <Container className={classes.shoppingCartContainer}>
      {addedItems}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.items.cart,
    total: state.items.total,
    shipping: state.items.shipping
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (id, newQuantity) => (dispatch(updateQuantity(id, newQuantity))),
    removeFromCart: (id) => (dispatch(removeFromCart(id)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
