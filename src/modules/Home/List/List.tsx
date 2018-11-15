import * as React from "react";

type PropsType = {
  savedDogs: { hash: string; name: string }[];
  loadDog: (hash: string) => () => void
};

const List = ({ savedDogs, loadDog }: PropsType) => (
  <ul>
    {Object.entries(savedDogs).map(([hash, name]) => {
      return (
        <li key={hash}>
          <button onClick={loadDog(hash)}>{name}</button>
        </li>
      );
    })}
  </ul>
);

export default List;
