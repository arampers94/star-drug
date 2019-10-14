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
    padding: '40px 70px',
    backgroundColor: 'white'
  },
  detailTitle: {
    paddingTop: '16px',
    paddingBottom: '16px'
  },
  detailText: {
    fontSize: 'large',
    margin: '0 0 20px 0'
  },
  iconText: {
    paddingLeft: '5px'
  }
}))

export default useStyles;