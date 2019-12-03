import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles'
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer-wrapper">
      <Grid container direction="column" className={classes.gridContainer}>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                View Products By:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} className={classes.gridItem}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  All | Baby & Kids | Beauty | Diet | Home
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Medicine | Personal Care | Seasonal | Vitamins
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.gridItem}>
              <Typography variant="body2">
                Privacy Policy | Terms of use | Refund policy
              </Typography>
              <Typography variant="body2">
                Shipping details | In-store pickup available
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center" className={classes.copyrightText}>
            {'Copyright © Amar Rampersaud '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;