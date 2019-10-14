import productTypes from '../types/productTypes';

export const addToCart = (id, img, name, price) => {
  return {
    type: productTypes.ADD_TO_CART,
    id,
    img,
    name,
    price
  }
}

export const removeFromCart = (id) => {
  return {
    type: productTypes.REMOVE_FROM_CART,
    id
  }
}

export const updateQuantity = (id, newQuantity) => {
  return {
    type: productTypes.UPDATE_QUANTITY,
    id,
    newQuantity
  }
}

export const emptyCart = () => {
  return {
    type: productTypes.EMPTY_CART
  }
}

export const filterItems = (products, category, filter) => {
  console.log('Filtering by ' + category);
  return (dispatch) => {
    products.forEach(item => {
      item.hidden = false;
      if (filter !== "All") {
        const match = item.tags.find(tag => tag === category) ? true : false;
        if (!match) {
          item.hidden = true;
        }
      }
    })

    const message = 'Filter success';
    dispatch({ type: productTypes.FILTER_ITEMS, message, filter });
  }
}