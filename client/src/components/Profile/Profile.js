import React, { useState }from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import UserNotFound from '../UserNotFound';
import ImageNoFound from '../../assets/images/avatar.png';
import ModalBasic from '../ModalBasic/ModalBasic';
import './Profile.scss';

const Profile = (props) => {
  const [ showModal, setShowModal ] = useState(false)
  const { username } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username }
  });

  if(loading) return null;
  if(error) return <UserNotFound />;

  const { getUser } = data
  // console.log(getUser)
  return (
    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image src={ImageNoFound} avatar onClick={() => setShowModal(true)}/>
        </Grid.Column>

        <Grid.Column width={11} className='profile__right'>
          <div>Header Profile</div>
          <div>Followers</div>
          <div className='others'>
            <p className='name'>{getUser.name}</p>
            {/* here we have the website condition */}
            {getUser.siteWeb && (
              <a href={getUser.siteWeb} className='siteweb' target="_blank" rel='noreferrer'>{getUser.siteWeb}</a>
            )
            }
            {/* Here we have the description condition */}
            {getUser.description && (
              <p>{getUser.description}</p>
            )
            }
          </div>
        </Grid.Column>
      </Grid>
      <ModalBasic show={showModal} setShow={setShowModal} title='upload avatar'>
        <p>Options...</p>
        <p>Options...</p>
        <p>Options...</p>
      </ModalBasic>
    </>
  )
}

export default Profile;
