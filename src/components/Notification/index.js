import React from 'react';
import { Snackbar, Slide } from '@material-ui/core';
import { connect } from 'react-redux';
import { showSnackbar, hideSnackbar } from '../../store/actions/snackbarActions';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Notification = (props) => {
  const classes = useStyles();
  const { isOpen, message, hide, notifId } = props;

  const handleClose = () => {
    hide();
  }

  return (
    <div>
      <Snackbar
        key={notifId}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <div>
            <Link to="/shopping_cart">
              <Button key="go-to-cart" onClick={handleClose} className={classes.goToCartButton}>
                Go to cart
              </Button>
            </Link>
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </div>
        ]}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.snackbar.open,
    message: state.snackbar.message,
    notifId: state.snackbar.notifId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    show: (message) => (dispatch(showSnackbar(message))),
    hide: () => (dispatch(hideSnackbar()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
