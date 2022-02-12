import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Image } from 'semantic-ui-react';
import Logo from '../../assets/images/instaclone.png'
import './Header.scss';
import RightHeader from './RightHeader';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className='header__logo'>
            <Link to='/'>
              <Image src={Logo} alt='instaclone' />
            </Link>
          </Grid.Column>

          <Grid.Column width={10}>
            <p>Search</p>
          </Grid.Column>

          <Grid.Column width={3}>
            <RightHeader />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default Header;
