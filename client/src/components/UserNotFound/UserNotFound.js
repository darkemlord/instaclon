import React from 'react';
import './UserNotFound.scss';
import { Link } from 'react-router-dom'

const UserNotFound = () => {
  return (
    <div className='user-not-found'>
      <p>Sorry This page isn't available</p>
      <p>The link you followed may be broken, or the page may have been removed.</p>
      <Link to='/'>Come back to main page</Link>
    </div>
  )
}

export default UserNotFound;
