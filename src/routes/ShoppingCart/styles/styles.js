import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  shoppingCartContainer: {
    padding: '20px',
    maxWidth: '1000px'
  },
  checkoutButtonContainer: {
    marginTop: '10px'
  },
  emptyCart: {
    padding: '50px'
  },
  emptyCartText: {
    fontSize: '2em'
  }
}));

export default useStyles;