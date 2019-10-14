import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  const { signOut } = props;

  const handleClick = (e) => {
    e.preventDefault();
    signOut();
  }

  return (
    <div>
      <Button color="inherit" onClick={handleClick}>
        Sign out
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => (dispatch(signOut()))
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);