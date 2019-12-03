import { makeStyles } from '@material-ui/core/styles';
import fall1 from '../../../images/fall2.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '40px',
    flexWrap: 'nowrap',
    maxWidth: '1200px',
    margin: 'auto',
    padding: '30px 0'
  },
  sidebar: {
    height: '100%',
    padding: '0 30px 30px 30px',
    borderRight: '1px solid #ccc',
    marginRight: '48px'
  },
  products: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 30px',
    flexGrow: 1
  },
  promoBanner: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  banner: {
    display: 'flex',
    backgroundImage: `url(${fall1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '125px',
    height: 'auto',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px'
  },
  promoText: {
    margin: '20px 0'
  },
  productList: {

  },
  productWrapper: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  box: {
    paddingBottom: '30px'
  },
  formControl: {
    margin: '16px 24px 24px 0',
  },
  card: {
    maxWidth: '250px',
    marginBottom: '24px',
    marginRight: '24px'
  },
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw'
  },
  gridItem: {
    margin: 0
  }
}));

export default useStyles;