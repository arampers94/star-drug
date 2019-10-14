import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles/styles';
import sortBy from '../functions/sortBy';
import { filterItems } from '../../../store/actions/productActions';
import { connect } from 'react-redux';
import { categories } from '../../../data/categories';

const Sidebar = (props) => {
  const classes = useStyles();
  const { products, handleUpdate, filterItems } = props;
  const [value, setValue] = React.useState(null);

  const handleChange = event => {
    switch (event.target.value) {
      case "price-low-to-high":
        products.sort(sortBy.lowToHigh);
        break;
      case "price-high-to-low":
        products.sort(sortBy.highToLow);
        break;
      case "top-rated":
        products.sort(sortBy.topRated);
        break;
      case "name-a-to-z":
        products.sort(sortBy.nameAtoZ);
        break;
      case "name-z-to-a":
        products.sort(sortBy.nameZtoA);
        break;
      default:
        throw new Error('Unknown sort type ' + value);
    }
    setValue(event.target.value);
    console.log('Result');
    console.log(products);
    handleUpdate();
  };

  const filter = (category, filter) => {
    console.log(category);
    filterItems(products, category, filter);
    handleUpdate();
  }

  return (
    <Container className={classes.sidebar}>
      <Box className={classes.box}>
        <Typography variant="h5">Sort</Typography>
        <hr />
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup aria-label="sort-options" name="sort" value={value} onChange={handleChange}>
            <FormControlLabel value="price-low-to-high" control={<Radio />} label="Price Low to High" />
            <FormControlLabel value="price-high-to-low" control={<Radio />} label="Price High to Low" />
            <FormControlLabel value="top-rated" control={<Radio />} label="Top Rated" />
            <FormControlLabel value="name-a-to-z" control={<Radio />} label="Name A - Z" />
            <FormControlLabel value="name-z-to-a" control={<Radio />} label="Name Z - A" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h5">Categories</Typography>
        <hr />
        <List>
          {categories.map((category, index) => {
            return (
              <ListItem button key={index} onClick={() => filter(category.name, category.title)}>
                <ListItemText primary={category.title} />
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterItems: (products, category, filter) => (dispatch(filterItems(products, category, filter)))
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);
