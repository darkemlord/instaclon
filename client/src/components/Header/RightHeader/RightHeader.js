import React from 'react';
import './RightHeader.scss';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


const RightHeader = () => {
  return (
    <div className='right-header'>
      <Link to='/'>
        <Icon name='home' />
      </Link>
    </div>
  )
}

export default RightHeader;
