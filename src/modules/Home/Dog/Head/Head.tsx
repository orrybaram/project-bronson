import * as React from "react";
import * as S from "./Head.styles";

type PropsType = {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
  isBlinking: boolean,
};

const Head = (props: PropsType) => {
  const { underCoat, baseCoat, eyeColor, isBlinking } = props;

  return (
    <S.Wrapper underCoat={underCoat} baseCoat={baseCoat} eyeColor={eyeColor}>
      <S.LeftEar />
      <S.RightEar />
      <S.Head>
        <S.Tongue initialPose="panting" pose="panting" />
        <S.Face>
          <S.LeftEye pose={isBlinking ? 'blink' : ''} />
          <S.RightEye pose={isBlinking ? 'blink' : ''} />
          <S.Nose />
        </S.Face>
      </S.Head>
    </S.Wrapper>
  );
};

export default Head;
