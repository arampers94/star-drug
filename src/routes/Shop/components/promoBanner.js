import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/styles';

const PromoBanner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.banner}>
      <Typography variant="h3" className={classes.promoText}>
        Save 20% on Back to School Items
      </Typography>
    </Container>
  )
}

export default PromoBanner;
