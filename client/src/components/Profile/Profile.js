import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user'
import ImageNoFound from '../../assets/images/avatar.png'
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
    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <span>LEFT</span>
        </Grid.Column>

        <Grid.Column width={11} className='profile__right'>
          <span>RIGHT</span>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Profile;
