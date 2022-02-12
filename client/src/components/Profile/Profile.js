import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user'
import './Profile.scss';

const Profile = (props) => {
  const { username } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username }
  });

  if(loading) return null;
  if(error) return <h1>User doesn't exist</h1>

  const { getUser } = data
  console.log(getUser)
  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}

export default Profile;
