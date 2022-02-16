import React from 'react';
import './RightHeader.scss';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Avatar from '../../../assets/images/avatar.png';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';


const RightHeader = () => {

  const { auth } = useAuth();

  const { data, loading, error} = useQuery(GET_USER, {
    variables: { username: auth.username }
  });

  if(loading || error) return null;

  const { getUser } = data;
  return (
    <div className='right-header'>
      <Link to='/'>
        <Icon name='home' />
      </Link>
      <Icon name='plus'/>
      <Link to={auth.username}>
        <Image src={getUser.avatar ? getUser.avatar : Avatar } avatar/>
      </Link>
    </div>
  )
}

export default RightHeader;
