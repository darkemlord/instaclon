import React, { useState }from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import UserNotFound from '../UserNotFound';
import ImageNoFound from '../../assets/images/avatar.png';
import ModalBasic from '../ModalBasic/ModalBasic';
import AvatarForm from '../User/AvatarForm/AvatarForm';
import { useAuth } from '../../hooks/useAuth';
import './Profile.scss';

const Profile = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [childrenModal, setChildrenModal] = useState(null);
  const { auth } = useAuth();
  const { username } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username }
  });

  if(loading) return null;
  if(error) return <UserNotFound />;

  const { getUser } = data

  const handlerModal = (type) => {
    switch(type) {
      case 'avatar':
        setTitleModal('Change Profile Picture');
        setChildrenModal(<AvatarForm setShowModal={setShowModal}/>);
        setShowModal(true);
        break;
      case 'header':
        console.log('emanuel')
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image src={ImageNoFound} avatar onClick={() => username === auth.username && handlerModal('avatar')}/>
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
      <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
        {childrenModal}
      </ModalBasic>
    </>
  )
}

export default Profile;
