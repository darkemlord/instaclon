import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import Logo from '../../assets/images/instaclone.png'
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className='header__logo'>
            <Image src={Logo} alt='instaclone' />
          </Grid.Column>

          <Grid.Column width={10} className='header__logo'>
            <p>Search</p>
          </Grid.Column>

          <Grid.Column width={3} className='header__logo'>
            <p>Options</p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default Header;
