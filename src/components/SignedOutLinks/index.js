import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const SignedOutLinks = (props) => {
  return (
    <div>
      <Link to="/signup">
        <Button color="inherit">Sign up</Button>
      </Link>
      <Link to="/signin">
        <Button color="inherit">Sign in</Button>
      </Link>
    </div>
  )
}

export default SignedOutLinks;
