import * as React from "react";
import * as S from "./Head.styles";



type PropsType = {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
};



const Head = (props: PropsType) => {
  const { underCoat, baseCoat, eyeColor } = props;

  return (
    <S.Wrapper underCoat={underCoat} baseCoat={baseCoat} eyeColor={eyeColor}>
      <S.LeftEar />
      <S.RightEar />
      <S.Head>
        <S.AnimatedTongue />
        <S.Face>
          <S.AnimatedLeftEye />
          <S.RightEye />
          <S.Nose />
        </S.Face>
      </S.Head>
    </S.Wrapper>
  );
};

export default Head;
