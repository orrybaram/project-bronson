import * as React from "react";

type PropsType = {
  starredDogs: { hash: string; name: string }[];
  loadDog: (hash: string) => () => void;
  deleteDog: (hash: string) => () => void;
};

const List = ({ starredDogs, loadDog, deleteDog }: PropsType) => (
  <ul>
    {Object.entries(starredDogs).map(([hash, name]) => {
      return (
        <li key={hash}>
          <button onClick={loadDog(hash)}>{name}</button>
          <button onClick={deleteDog(hash)}>x</button>
        </li>
      );
    })}
  </ul>
);

export default List;
