import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './routes/Home';
import Pharmacy from './routes/Pharmacy';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Checkout from './routes/Checkout';
import Shop from './routes/Shop';
import ProductDetails from './routes/ProductDetails';
import ShoppingCart from './routes/ShoppingCart';
import { ThemeProvider } from '@material-ui/styles';
import theme from './themes';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <ContactModal />
            <Notification />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pharmacy" component={Pharmacy} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/shop" component={Shop} />
              <Route path="/product_details/:id" component={ProductDetails} />
              <Route path="/shopping_cart" component={ShoppingCart} />
            </Switch>
          </ThemeProvider>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
