import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import useStyles from './styles';
import Badge from '@material-ui/core/Badge';
import { openModal } from '../../store/actions/modalActions';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SideBar from '../../routes/Shop/components/sidebar';


const Navbar = (props) => {
  const classes = useStyles();
  const { auth, itemCount, openModal, products } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  const [update, setUpdate] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenModal = () => {
    setMobileMoreAnchorEl(null);
    openModal();
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUpdate = () => {
    setUpdate(!update);
    handleDrawerToggle();
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
        <Link to="/"><p>Home</p></Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-controls="primary-search-account-menu"
          color="inherit"
        >
          <LocalMallIcon />
        </IconButton>
        <Link to="/shop"><p>Shop</p></Link>
      </MenuItem>
      <MenuItem onClick={handleOpenModal}>
        <IconButton
          aria-controls="primary-search-account-menu"
          color="inherit"
        >
          <PhoneIcon />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Link to="/shopping_cart"><p>View Cart</p></Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-haspopup="true"
          color="inherit"
        >
          <PersonAddIcon />
        </IconButton>
        <Link to="/signup"><p>Sign Up</p></Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-haspopup="true"
          color="inherit"
        >
          <VpnKeyIcon />
        </IconButton>
        <Link to="/signin"><p>Sign In</p></Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              anchor={'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <SideBar products={products} handleUpdate={handleUpdate.bind(this)} />
            </Drawer>
          </Hidden>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Star Drug</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/shop"><Button color="inherit">Shop</Button></Link>
            <Button color="inherit" onClick={handleOpenModal}>
              Contact
              </Button>
            {links}
            <IconButton
              edge="end"
              aria-label="shopping-cart"
              color="inherit"
            >
              <Link to="/shopping_cart">
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div >
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    itemCount: state.items.cart.length,
    products: state.firestore.ordered.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => (dispatch(openModal()))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Navbar)