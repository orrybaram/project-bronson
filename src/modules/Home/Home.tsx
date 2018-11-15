import * as React from "react";
import styled from "react-emotion";
import { debounce } from 'lodash';
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
    excitementLevel: "low" | "high";
    isAnimated: boolean,
  };
  starredDogs: { hash: string; name: string }[];
};

const getDogsFromLocalStorage = () => {
  const dogsJSON = localStorage.getItem("starredDogs") || "{}";
  return JSON.parse(dogsJSON);
};

export default class Home extends React.Component<PropsType, StateType> {
  constructor(props: {}) {
    super(props);

    const {
      data,
      meta
    }: { data: ValuesType; meta: MetaType } = getGeneratedValues();

    const dogsJSON = localStorage.getItem("starredDogs") || "{}";
    const starredDogs = JSON.parse(dogsJSON);

    this.state = {
      dog: {
        data,
        meta,
        excitementLevel: "low",
        isAnimated: true,
      },
      starredDogs
    };
  }

  saveDog = (hash: string, name: string) => () => {
    const dogs = getDogsFromLocalStorage();
    dogs[hash] = name;

    localStorage.setItem("starredDogs", JSON.stringify(dogs));

    this.setState({
      starredDogs: dogs
    });
  };

  loadDog = (hash: string) => () => {
    const values = JSON.parse(atob(hash));

    this.setState({
      dog: {
        ...this.state.dog,
        data: values,
        meta: { hash },
      }
    });
  };

  deleteDog = (hash: string) => () => {
    const { [hash]: deletedDog, ...dogs } = getDogsFromLocalStorage();
    localStorage.setItem("starredDogs", JSON.stringify(dogs));

    this.setState({
      starredDogs: dogs
    });
  };

  onDogClick = () => {
    this.setState({
      dog: {
        ...this.state.dog,
        excitementLevel: "high"
      }
    });

    setTimeout(() => {
      this.setState({
        dog: {
          ...this.state.dog,
          excitementLevel: "low"
        }
      });
    }, 5000);
  };

  debouncedOnDogClick = debounce(this.onDogClick, 500, {leading: true});

  render() {
    const { dog, starredDogs } = this.state;
    const { data, meta, isAnimated, excitementLevel } = dog;
    const { backgroundColor, name, ...dogData } = data;

    return (
      <Main backgroundColor={backgroundColor}>
        <Dog
          data={{ ...dogData }}
          excitementLevel={excitementLevel}
          onClick={this.debouncedOnDogClick}
          isAnimated={isAnimated}
        />
        <Name>{name}</Name>
        {/* <button onClick={this.saveDog(meta.hash, name)}>⭐</button>
        <List
          loadDog={this.loadDog}
          starredDogs={starredDogs}
          deleteDog={this.deleteDog}
        /> */}
      </Main>
    );
  }
}
