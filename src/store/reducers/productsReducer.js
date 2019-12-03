import productTypes from '../types/productTypes';

const initState = {
  products: [],
  cart: [],
  filter: 'All',
  shipping: 5.00,
  taxRate: .045,
  taxAmount: 0,
  total: 0
}

const productsReducer = (state = initState, action) => {
  switch (action.type) {

    case productTypes.ADD_TO_CART:
      console.log('Adding to cart');
      let addedItem = {
        id: action.id,
        img: action.img,
        name: action.name,
        price: action.price,
        quantity: 1
      }
      let cartTotal = state.total + addedItem.price;
      return {
        ...state,
        cart: [...state.cart, addedItem],
        total: cartTotal,
      }

    case productTypes.UPDATE_QUANTITY:
      console.log('Updating quantity');
      let cart = state.cart;
      console.log('cart: ');
      console.log(cart);
      let cartIndex = cart.findIndex(item => action.id === item.id);
      let itemToUpdate = cart[cartIndex];
      console.log('item to update: ');
      console.log(itemToUpdate);
      let oldQuantity = itemToUpdate.quantity;
      let newQuantity = action.newQuantity;
      itemToUpdate.quantity = newQuantity;
      cart[cartIndex] = itemToUpdate;
      console.log('cart after update: ');
      console.log(cart);

      let difference = Math.abs(oldQuantity - newQuantity);
      let priceChange = itemToUpdate.price * difference;
      let newTotal = newQuantity > oldQuantity ? state.total + priceChange : state.total - priceChange;

      return {
        ...state,
        cart: cart,
        total: newTotal
      }

    case productTypes.REMOVE_FROM_CART:
      let itemToRemove = state.cart.find(item => action.id === item.id);
      let newCart = state.cart.filter(item => action.id !== item.id);
      console.log('Removing from cart item id: ');
      console.log(itemToRemove);
      let updatedTotal = state.total - (itemToRemove.price * itemToRemove.quantity);

      return {
        ...state,
        cart: newCart,
        total: updatedTotal
      }

    case productTypes.EMPTY_CART:
      console.log('Emptying cart');
      let cartItems = [];
      let itemList = state.products;

      for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].inCart) {
          itemList[i].inCart = false;
        }
      }

      return {
        ...state,
        products: itemList,
        cart: cartItems,
        total: 0
      }
    case productTypes.FILTER_ITEMS:
      console.log(action.message);
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
}

export default productsReducer;