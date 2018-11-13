import * as React from "react";
import { PropsType } from './types';
import * as S from './styles';

const Dog = ({ data }: PropsType) => {
  const { bellyColor, coatColor, hasSpots, secondaryCoatColor } = data;

  return (
    <S.Wrapper>
      <S.Shadow />
      <S.Body coatColor={coatColor} bellyColor={bellyColor}>
        <S.Torso>
          <S.Belly color={bellyColor} />
          {hasSpots && <S.Spots color={secondaryCoatColor} />}
        </S.Torso>
        <S.Tail />
        <S.Leg1 />
        <S.Leg2 />
        <S.Leg3 />
        <S.Leg4 />
      </S.Body>
    </S.Wrapper>
  );
};

export default Dog;
