import * as React from "react";
import styled from "react-emotion";
import getGeneratedValues from "./getGeneratedValues";
import Dog from './Dog';

const { data, meta } = getGeneratedValues();

const {
  backgroundColor,
  ...restData
} = data;


const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${backgroundColor};
  padding: 20px;
  height: 100vh;
`;

const Home = () => {
  return (
    <Main>
      <Dog data={{ ...restData }} />
    </Main>
  );
};

export default Home;