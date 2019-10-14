import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    color: 'white',
    padding: '40px 40px 0',
  },
  copyrightText: {
    marginTop: '20px'
  }
}));

export default useStyles;