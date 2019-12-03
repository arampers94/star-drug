import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    color: 'white',
    padding: '40px 40px 0',
    maxWidth: '1200px',
    margin: 'auto'
  },
  copyrightText: {
    marginTop: '20px'
  },
  gridItem: {
    marginBottom: '20px'
  }
}));

export default useStyles;