import * as React from "react";
import styled from "react-emotion";
import { Keyframes } from "react-spring";
import { HeadColorsType } from "../types";
import colors from "../../../../colors";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const getRandomRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Ear = styled.div`
  position: absolute;
  border-radius: 83px 82px 65px 64px / 106px 127px 33px 27px;
  width: 35px;
  height: 50px;
  top: -15px;
`;

export const Tongue = styled.div`
  position: absolute;
  border-radius: 0 0 10px 10px;
  background-color: ${colors.red[20]};
  width: 12px;
  height: 20px;
  top: 40px;
  left: 22px;
`;

export const LeftEar = styled(Ear)`
  left: -20px;
  transform: rotate(-50deg);
`;

export const Nose = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.neutral[90]};
  width: 15px;
  height: 10px;
  bottom: 3px;
  left: 17px;
  z-index: 1;
`;

export const Face = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 45px 66px 32px 18px / 60px 52px 17px 32px;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 55px;
    width: 48px;
    top: -2px;
  }

  &::before {
    left: -21px;
  }

  &::after {
    right: -17px;
  }
`;

export const RightEar = styled(Ear)`
  right: -20px;
  transform: rotate(50deg);
`;

const Eye = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.neutral[90]};
  width: 12px;
  height: 12px;
  top: 30px;
  z-index: 1;

  &::before {
    top: 4px;
    left: 1px;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: white;
    width: 3px;
    height: 3px;
  }
`;

export const LeftEye = styled(Eye)`
  left: 10px;
`;

export const RightEye = styled(Eye)`
  right: 14px;
`;

const eyeWinkLoop = async next => {
  while (true) {
    const winkInterval = getRandomRange(1000, 10000)
    await next({ opacity: 1});
    await delay(winkInterval);

    await next({
      transform: "matrix(1, 0, 0, 0.1, 0, 0);",
      from: { transform: "matrix(1, 0, 0, 1, 0, 0);" },
      config: { duration: 100 }
    });
    await next({
      transform: "matrix(1, 0, 0, 1, 0, 0);",
      from: { transform: "matrix(1, 0, 0, 0.1, 0, 0);" },
      config: { duration: 100 }
    });
  }
};

const EyeWink = Keyframes.Spring(eyeWinkLoop);

export const AnimatedLeftEye = ({ isAnimated }: { isAnimated: boolean }) => (
  <EyeWink>{props => <LeftEye css={isAnimated && props} />}</EyeWink>
);

export const Head = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 45px 66px 32px 18px / 60px 52px 17px 32px;
`;

const tongueLoop = async next => {
  while (true) {
    await next({
      transform: "translateY(10px)",
      from: { transform: "translateY(8px)" },
      reset: false
    });
    await next({
      transform: "translateY(8px)",
      from: { transform: "translateY(10px)" },
      reset: true
    });
  }
};

const AnimateTongue = Keyframes.Spring(tongueLoop);

export const AnimatedTongue = ({ isAnimated }: { isAnimated: boolean }) => (
  <AnimateTongue config={{ duration: 150 }}>
    {props => <Tongue css={isAnimated && props} />}
  </AnimateTongue>
);

export const Wrapper = styled.div`
  position: absolute;
  top: -40px;
  left: -9px;

  ${Head} {
    background-color: ${({ underCoat }: HeadColorsType) => underCoat};
  }

  ${Face} {
    background-color: ${({ underCoat }: HeadColorsType) => underCoat};
    &::before,
    &::after {
      background-color: ${({ baseCoat }: HeadColorsType) => baseCoat};
    }
  }

  ${LeftEar}, ${RightEar} {
    background-color: ${({ underCoat }: HeadColorsType) => underCoat};
    box-shadow: ${({ baseCoat }: HeadColorsType) =>
      `inset 0px 4px 0 7px ${baseCoat}`};
  }

  ${LeftEye}, ${RightEye} {
    background-color: ${({ eyeColor }: HeadColorsType) => eyeColor};
  }
`;
