import * as React from "react";
import * as S from "./Head.styles";

type PropsType = {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
  isAnimated: boolean,
};

const Head = (props: PropsType) => {
  const { underCoat, baseCoat, eyeColor, isAnimated } = props;

  return (
    <S.Wrapper underCoat={underCoat} baseCoat={baseCoat} eyeColor={eyeColor}>
      <S.LeftEar />
      <S.RightEar />
      <S.Head>
        <S.AnimatedTongue isAnimated={isAnimated} />
        <S.Face>
          <S.AnimatedLeftEye isAnimated={isAnimated} />
          <S.RightEye />
          <S.Nose />
        </S.Face>
      </S.Head>
    </S.Wrapper>
  );
};

export default Head;
