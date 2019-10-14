import React from 'react';
import Footer from '../../components/Footer';
import { Grid, Button, Typography, Paper, Divider, Icon } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { filterItems } from '../../store/actions/productActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { categories } from '../../data/categories';

// Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const Home = (props) => {
  const classes = useStyles();
  const { products, filterItems } = props;

  const handleClick = (category, title) => {
    filterItems(products, category, title);
  }

  return (
    <div>
      <Grid container direction="row" className={classes.introWrapper} id="introWrapper">
        <Grid item xs={12} sm={3}>
          <Paper id="categories" className={classes.categories}>
            <List component="nav" aria-label="categories">
              {categories.map((category, index) => {
                return (
                  <div key={index}>
                    <Link to="/shop">
                      <ListItem button onClick={() => handleClick(category.name, category.title)}>
                        <ListItemText primary={category.title} />
                      </ListItem>
                    </Link>
                    {index < (categories.length - 1) ? <Divider /> : null}
                  </div>
                )
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Grid container direction="row" className={classes.innerContainer}>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title} gutterBottom>
                  Welcome To Star Drug
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.caption} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Link to="/shop">
                  <Button variant="contained" color="secondary">Shop Now</Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container className={classes.gridContainer}>
        <Grid item sm={6}>
          <Typography variant="h2" gutterBottom>Star Drug Pharmacy</Typography>
          <Typography variant="body1" className={classes.pharmDescStyle}>
            <em>New and Refill Prescriptions Available</em>
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.contactSection}>
        <Grid item xs={12} sm={6} className={classes.contactTextWrapper}>
          <Grid item xs={12} className={classes.contactTextLine}>
            <Icon className={classes.contactTextIcon}>
              <LocationOnIcon />
            </Icon>
            <Typography variant="h5" gutterBottom className={classes.contactText}>
              57 East Kingsbridge Road, The Bronx, NY, 10468
              </Typography>
          </Grid>
          <Grid item xs={12} className={classes.contactTextLine}>
            <Icon className={classes.contactTextIcon}>
              <HomeRoundedIcon />
            </Icon>
            <Grid item className={classes.contactTextCaption}>
              <Typography variant="h5" className={classes.contactText}>Open 7 Days a Week 9am to 8pm*</Typography>
              <Typography variant="caption" gutterBottom>*Sundays 10am to 5pm</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contactTextLine}>

          </Grid>
          <Grid item xs={12} className={classes.contactTextLine}>
            <Icon className={classes.contactTextIcon}>
              <PhoneRoundedIcon />
            </Icon>
            <Typography variant="h5" className={classes.contactText}>(718) 295 - 4444</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.mapWrapper}>
          <Paper>
            <div className={classes.map}></div>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterItems: (products, category, title) => (dispatch(filterItems(products, category, title)))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Home);