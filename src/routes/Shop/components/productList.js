import React from 'react';
import { Typography } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import useStyles from '../styles/styles';
import AddToCartButton from '../../../components/AddToCartButton';

// Recieves a list of products and renders each product in a list
const ProductList = (props) => {
  const classes = useStyles();
  const { products, cart, inCart, filter } = props;

  if (products) {
    return (
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className="product-list-text">
            Showing "{filter}" Products
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center">
            {products.map((item, index) => {
              if (!item.hidden) {
                return (
                  <Grid item key={index} className={classes.gridItem}>
                    <Card className={classes.card} key={index} id="product-card">
                      <CardActionArea>
                        <Link to={"/product_details/" + item.id} key={item.id}>
                          <CardMedia
                            component="img"
                            alt={item.name}
                            height={300}
                            width={250}
                            image={item.img}
                            title={item.name}
                          />
                        </Link>
                      </CardActionArea>
                      <CardContent>
                        <Typography variant="h6" noWrap>
                          {item.name}
                        </Typography>
                        <div style={{ display: 'flex' }}>
                          <Typography variant="subtitle1">
                            {item.rating}
                          </Typography>
                          <Rating precision={0.1} value={item.rating} readOnly />
                        </div>
                        <Typography variant="subtitle2" style={{ fontSize: '20px' }}>
                          <strong>${item.price}</strong>
                        </Typography>
                        <CardActions style={{ padding: '8px 8px 8px 0' }}>
                          <AddToCartButton inCart={inCart(cart, item.id)} item={item} />
                        </CardActions>
                      </CardContent>
                    </Card>

                  </Grid>
                )
              }
              return (null);
            })}
          </Grid>
        </Grid>
      </Grid >
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default ProductList;