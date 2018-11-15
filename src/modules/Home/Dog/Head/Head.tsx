import * as React from "react";
import * as S from "./Head.styles";

type PropsType = {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
};

const Dog = (props: PropsType) => {
  const { underCoat, baseCoat, eyeColor } = props;

  return (
    <S.Wrapper underCoat={underCoat} baseCoat={baseCoat} eyeColor={eyeColor}>
      <S.LeftEar />
      <S.RightEar />
      <S.Head>
        <S.Face>
          <S.LeftEye />
          <S.RightEye />
          <S.Nose />
        </S.Face>
        <S.Tongue />
      </S.Head>
    </S.Wrapper>
  );
};

export default Dog;
