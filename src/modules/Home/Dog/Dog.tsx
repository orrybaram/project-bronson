import * as React from "react";
import { PropsType } from "./types";
import * as S from "./Dog.styles";
import Head from "./Head";

const Dog = ({ data, excitementLevel, onClick, isAnimated }: PropsType) => {
  const { underCoat, baseCoat, hasSpots, secondaryBaseCoat, eyeColor } = data;

  return (
    <S.Wrapper onClick={onClick}>
      <S.Shadow />
      <S.Body baseCoat={baseCoat} underCoat={underCoat}>
        <S.WaggingTail
          excitementLevel={excitementLevel}
          isAnimated={isAnimated}
        />
        <S.Leg1 />
        <S.Leg2 />
        <S.Leg3 />
        <S.Leg4 />
        <S.Torso>
          <S.Belly color={underCoat} />
          {hasSpots && (
            <S.Spots
              secondaryBaseCoat={secondaryBaseCoat}
            />
          )}
        </S.Torso>
      </S.Body>
      <Head
        baseCoat={baseCoat}
        underCoat={underCoat}
        eyeColor={eyeColor}
        isAnimated={isAnimated}
      />
    </S.Wrapper>
  );
};

export default Dog;
