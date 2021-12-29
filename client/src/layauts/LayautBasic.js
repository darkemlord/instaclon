import React from 'react';
import { Container } from 'semantic-ui-react';

export const LayautBasic = (props) => {
  return (
    <>
    <h1>Header</h1>
    <Container className='layout-basic'>{props.children}</Container>
    </>
  )
}

export default LayautBasic;
