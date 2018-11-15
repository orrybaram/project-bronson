import * as React from "react";
import { PropsType } from "./types";
import * as S from "./Dog.styles";
import Head from "./Head";

const Dog = ({ data }: PropsType ) => {
  const { underCoat, baseCoat, hasSpots, secondaryBaseCoat, eyeColor } = data;

  return (
    <S.Wrapper>
      <S.Shadow />
      <S.Body baseCoat={baseCoat} underCoat={underCoat}>
        <S.WaggingTail />
        <S.Leg1 />
        <S.Leg2 />
        <S.Leg3 />
        <S.Leg4 />
        <S.Torso>
          <S.Belly color={underCoat} />
          {hasSpots && <S.Spots color={secondaryBaseCoat} />}
        </S.Torso>
      </S.Body>
      <Head baseCoat={baseCoat} underCoat={underCoat} eyeColor={eyeColor} />
    </S.Wrapper>
  );
};

export default Dog;
