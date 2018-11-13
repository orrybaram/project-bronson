import * as React from 'react';
import styled from 'react-emotion';
import { Flex } from '@rebass/grid/emotion';
import getGeneratedValues from './getGeneratedValues';

const generatedValues = getGeneratedValues();

const Main: React.Component = styled(Flex)`
  background: ${generatedValues.background};
  padding: 20px;
  height: 100vh;
`;

const Home = () => {
  return (
    <Main justifyContent="center" alignItems="center">
      <h1>:)</h1>
    </Main>
  );
};

export default Home;