import * as React from "react";
import styled from "react-emotion";
import getGeneratedValues from "./getGeneratedValues";
import Dog from "./Dog";
import { ValuesType, MetaType } from "./Home.types";
import List from "./List";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor};
  padding: 20px;
  height: 100vh;
`;

const Name = styled.h4`
  margin-top: 40px;
  opacity: 0.3;
`;

type PropsType = {};

type StateType = {
  dog: {
    data: ValuesType;
    meta: MetaType;
  };
  savedDogs: { hash: string; name: string }[];
};

export default class Home extends React.Component<PropsType, StateType> {
  constructor(props: {}) {
    super(props);

    const {
      data,
      meta
    }: { data: ValuesType; meta: MetaType } = getGeneratedValues();

    const dogsJSON = localStorage.getItem("savedDogs") || "{}";
    const savedDogs = JSON.parse(dogsJSON);

    this.state = {
      dog: {
        data,
        meta
      },
      savedDogs
    };
  }

  saveDog = (hash: string, name: string) => () => {
    const dogsJSON = localStorage.getItem("savedDogs") || "{}";
    const dogs = JSON.parse(dogsJSON);
    dogs[hash] = name;

    localStorage.setItem("savedDogs", JSON.stringify(dogs));

    this.setState({
      savedDogs: dogs
    });
  };

  loadDog = (hash: string) => () => {
    const values = JSON.parse(atob(hash));

    this.setState({
      dog: {
        data: values,
        meta: { hash }
      }
    });
  };

  render() {
    const { dog, savedDogs } = this.state;
    const { data, meta } = dog;
    const { backgroundColor, name, ...dogData } = data;

    return (
      <Main backgroundColor={backgroundColor}>
        <Dog data={{ ...dogData }} />
        <Name>{name}</Name>
        {/* <button onClick={this.saveDog(meta.hash, name)}>Save</button> */}
        {/* <List loadDog={this.loadDog} savedDogs={savedDogs} /> */}
      </Main>
    );
  }
}
