import * as React from "react";
import * as S from "./Head.styles";

type PropsType = {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
  isBlinking: boolean;
  isButtFirst: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  heightModifier: number;
};

const Head = (props: PropsType) => {
  const {
    onMouseDown,
    onMouseUp,
    underCoat,
    baseCoat,
    eyeColor,
    isBlinking,
    isButtFirst,
    heightModifier,
  } = props;

  return (
    <S.Head
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      underCoat={underCoat}
      baseCoat={baseCoat}
      eyeColor={eyeColor}
      isButtFirst={isButtFirst}
      heightModifier={heightModifier}
    >
      <S.LeftEar />
      <S.RightEar />
      <S.FaceWrapper>
        <S.Tongue initialPose="panting" pose="panting" />
        <S.Face>
          <S.LeftEye pose={isBlinking ? "blink" : ""} />
          <S.RightEye pose={isBlinking ? "blink" : ""} />
          <S.Nose />
        </S.Face>
      </S.FaceWrapper>
    </S.Head>
  );
};

export default Head;
