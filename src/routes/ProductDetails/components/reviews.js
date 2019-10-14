import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';

import useStyles from '../styles';
import reviewData from './reviewData';

const Reviews = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="column"
        className={classes.row}
      >
        <Typography variant="h4" gutterBottom>Reviews</Typography>
        <Grid
          container
          item
          direction="column"
          spacing={3}
        >
          {/* Wrapper for overall rating w/text */}
          <Grid
            item
            container
            alignItems="center"
          >
            Overall{' '}
            <Rating precision={0.1} value={4.3} readOnly />{' '}
            <Typography variant="subtitle1">
              4.3
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">Write review</Button>{' '}
            <Button variant="outlined" color="secondary">See all reviews (10)</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
      >
        {reviewData.map((review, index) => {
          return (
            <Grid item className={classes.row} key={index}>
              <Rating value={review.rating} readOnly />
              <Typography variant="h5" gutterBottom>
                "{review.title}"
              </Typography>
              <Typography variant="body2" gutterBottom>
                By {review.user} • {review.datePosted}
              </Typography>
              <Typography variant="body1" gutterBottom paragraph>
                {review.body}
              </Typography>
              <ButtonGroup
                variant="outlined"
              >
                <Button>
                  <ThumbUpRoundedIcon color="secondary" />
                  <Typography variant="subtitle2" className={classes.iconText}>
                    {review.helpfulVotes}
                  </Typography>
                </Button>
                <Button>
                  <ThumbDownRoundedIcon color="primary" />
                  <Typography variant="subtitle2" className={classes.iconText}>
                    {review.unhelpfulVotes}
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Reviews;
