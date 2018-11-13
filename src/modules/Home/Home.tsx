import * as React from "react";
import styled from "react-emotion";
import getGeneratedValues from "./getGeneratedValues";

const {
  backgroundColor,
  coatColor,
  secondaryCoatColor,
  tertiaryCoatColor,
  bellyColor,
  hasSpots
} = getGeneratedValues();

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${backgroundColor};
  padding: 20px;
  height: 100vh;
`;

const Dog = styled.div`
  position: relative;
  background-color: ${coatColor};
  height: 50px;
  width: 50px;
`;

const Belly = styled.div`
  position: absolute;
  background-color: ${bellyColor};
  bottom: 0;
  height: 30px;
  width: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Spots = styled.div`
  background-color: ${secondaryCoatColor};
  position: absolute;
  left: 0;
  height: 10px;
  width: 10px;
`;

const Home = () => {
  return (
    <Main>
      <Dog>
        <Belly />
        {hasSpots && <Spots />}
      </Dog>
    </Main>
  );
};

export default Home;
