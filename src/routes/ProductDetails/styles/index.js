import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  row: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '50px',
    paddingTop: '50px'
  },
  secondRow: {
    paddingTop: '50px'
  },
  detailsGrid: {
    padding: '30px',
    backgroundColor: 'white',
    maxWidth: '1200px',
    margin: 'auto'
  },
  detailTitle: {
    padding: '16px 0',
  },
  detailText: {
    fontSize: 'large',
    margin: '0 0 20px 0'
  },
  iconText: {
    paddingLeft: '5px'
  },
  productImage: {
    textAlign: 'center'
  }
}))

export default useStyles;