import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

export const LayautBasic = (props) => {
  return (
    <>
    <Header />
    <Container className='layout-basic'>{props.children}</Container>
    </>
  )
}

export default LayautBasic;
