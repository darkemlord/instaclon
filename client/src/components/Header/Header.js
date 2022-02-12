import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className='header__logo'>
            <p>Logo</p>
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
