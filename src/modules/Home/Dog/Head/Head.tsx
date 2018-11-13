import * as React from "react";
import * as S from "./styles";

type PropsType = {
  bellyColor: string;
  coatColor: string;
};

const Dog = (props: PropsType) => {
  const { bellyColor, coatColor } = props;

  return (
    <S.Wrapper bellyColor={bellyColor} coatColor={coatColor}>
      <S.LeftEar />
      <S.RightEar />
      <S.Head>
        <S.LeftEye />
        <S.RightEye />
        <S.Nose />
        <S.Tongue />
      </S.Head>
    </S.Wrapper>
  );
};

export default Dog;
