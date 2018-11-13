import * as React from "react";
import * as S from "./styles";

type PropsType = {
  underCoat: string;
  baseCoat: string;
};

const Dog = (props: PropsType) => {
  const { underCoat, baseCoat } = props;

  return (
    <S.Wrapper underCoat={underCoat} baseCoat={baseCoat}>
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
