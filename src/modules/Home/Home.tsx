import * as React from "react";
import styled from "react-emotion";
import getGeneratedValues from "./getGeneratedValues";
import Dog from './Dog';

const { data, meta } = getGeneratedValues();

const {
  backgroundColor,
  name,
  ...dogData
} = data;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${backgroundColor};
  padding: 20px;
  height: 100vh;
`;

const Name = styled.h4`
  margin-top: 40px;
  opacity: 0.3;
`;

const Home = () => {
  return (
    <Main>
      <Dog data={{ ...dogData }} />
      <Name>{name}</Name>
    </Main>
  );
};

export default Home;