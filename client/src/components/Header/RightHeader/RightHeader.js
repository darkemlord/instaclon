import React from 'react';
import './RightHeader.scss';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Avatar from '../../../assets/images/avatar.png';


const RightHeader = () => {

  const data = useAuth();

  console.log(data)
  return (
    <div className='right-header'>
      <Link to='/'>
        <Icon name='home' />
      </Link>
      <Icon name='plus'/>
      <Link to='/'>
        <Image src={Avatar} avatar/>
      </Link>
    </div>
  )
}

export default RightHeader;
