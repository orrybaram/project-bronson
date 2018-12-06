import * as React from "react";
import getGeneratedValues from "./getGeneratedValues";
import Dog from "./Dog";
import { ValuesType, MetaType } from "./Home.types";
import List from "./List";
import * as S from './Home.styles';
import Confetti from './Confetti';

let viewedDogsCount = Number(localStorage.getItem("viewedDogsCount")) || 0;
localStorage.setItem("viewedDogsCount", `${(viewedDogsCount += 1)}`);

const dogsJSON = localStorage.getItem("starredDogs") || "{}";
const initialStarredDogs = JSON.parse(dogsJSON);

const getDogsFromLocalStorage = () => {
  const dogsJSON = localStorage.getItem("starredDogs") || "{}";
  return JSON.parse(dogsJSON);
};

const Home = () => {
  const [starredDogs, setStarredDogs] = React.useState(initialStarredDogs)
  const [dog, setDog] = React.useState(getGeneratedValues());
  const hasConfetti = false;

  const { data, meta }: { data: ValuesType; meta: MetaType } = dog;
  const { backgroundColor, name, ...dogData } = data;


  const saveDog = (hash: string, name: string) => () => {
    const dogs = getDogsFromLocalStorage();
    dogs[hash] = name;

    localStorage.setItem("starredDogs", JSON.stringify(dogs));

    setStarredDogs(dogs);
  };

  const loadDog = (hash: string) => () => {
    const values = JSON.parse(atob(hash));

    setDog({
      data: values,
      meta: { hash },
    });
  };

  const deleteDog = (hash: string) => () => {
    const { [hash]: deletedDog, ...dogs } = getDogsFromLocalStorage();
    localStorage.setItem("starredDogs", JSON.stringify(dogs));

    setStarredDogs(dogs);
  };


  return (
    <S.Main backgroundColor={backgroundColor}>
      <Dog {...dogData} />
      <S.Name>{name}</S.Name>
      {/* <button onClick={saveDog(meta.hash, name)}>⭐</button>
      <List
        loadDog={loadDog}
        starredDogs={starredDogs}
        deleteDog={deleteDog}
      /> */}
      {hasConfetti &&
        <Confetti />
      }

    </S.Main>
  );
};

export default Home;
