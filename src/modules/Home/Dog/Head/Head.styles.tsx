import * as React from "react";
import styled, { css } from "react-emotion";
import posed from "react-pose";
import colors from "lib/colors";

export interface HeadStylePropsType {
  baseCoat: string;
  eyeColor: string;
  heightModifier: number;
  isButtFirst: boolean;
  underCoat: string;
}

const Ear = styled.div`
  position: absolute;
  border-radius: 83px 82px 65px 64px / 106px 127px 33px 27px;
  width: 35px;
  height: 50px;
  top: -15px;
`;

export const LeftEar = styled(Ear)`
  left: -20px;
  transform: rotate(-50deg);
`;

export const RightEar = styled(Ear)`
  right: -20px;
  transform: rotate(50deg);
`;

export const Nose = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.neutral[100]};
  width: 15px;
  height: 10px;
  bottom: 1px;
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

const Eye = css`
  position: absolute;
  border-radius: 50%;
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
    background-color: ${colors.neutral[10]};
    width: 3px;
    height: 3px;
  }
`;

const AnimatedEye = posed.div({
  blink: {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    transition: () => {
      return {
        type: "keyframes",
        values: [
          "matrix(1, 0, 0, 1, 0, 0)",
          "matrix(1, 0, 0, 0.1, 0, 0)",
          "matrix(1, 0, 0, 1, 0, 0)"
        ],
        duration: 200
      };
    }
  }
});

export const LeftEye = styled(AnimatedEye)`
  ${Eye}
  left: 10px;
`;

export const RightEye = styled(AnimatedEye)`
  ${Eye}
  right: 14px;
`;

export const FaceWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 45px 66px 32px 18px / 60px 52px 17px 32px;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    background: white;
    border-radius: 10px;
    bottom: -2px;
    width: 18px;
    height: 14px;
    left: 18px;
  }
`;

const AnimatedTongue = posed.div({
  panting: {
    transform: "translateY(10px)",
    transition: () => {
      return {
        type: "keyframes",
        values: ["translateY(10px)", "translateY(8px)", "translateY(10px)"],
        loop: Infinity,
        duration: 500
      };
    }
  }
});

export const Tongue = styled(AnimatedTongue)`
  position: absolute;
  border-radius: 0 0 10px 10px;
  background-color: ${colors.red[20]};
  width: 12px;
  height: 20px;
  top: 40px;
  left: 22px;
`;

const AnimatedHead = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  dragBounds: { left: "-5%", right: "5%", top: "-5%", bottom: "5%" },
  init: {
    scale: 1.1,
    rotate: ({ isButtFirst }: { isButtFirst: boolean }) =>
      isButtFirst ? "30deg" : "5deg",
    translateY: "0px"
  },
  hover: {
    rotate: ({ isButtFirst }: { isButtFirst: boolean }) =>
      isButtFirst ? "35deg" : "10deg",
    scale: 1.1,
    translateY: "0px"
  },
  press: {
    scale: 1.1,
    rotate: ({ isButtFirst }: { isButtFirst: boolean }) =>
      isButtFirst ? "37deg" : "12deg",
    translateY: "5px"
  }
});

export const Head = styled(AnimatedHead)`
  position: absolute;
  transform: scale(1.1);
  cursor: pointer;
  top: ${({ heightModifier}: HeadStylePropsType) => `${heightModifier - 40}px`};
  left: -9px;

  ${FaceWrapper} {
    background-color: ${({ underCoat }: HeadStylePropsType) => underCoat};
    &::after {
      background-color: ${({ underCoat }: HeadStylePropsType) => underCoat};
    }
  }

  ${Face} {
    background-color: ${({ underCoat }: HeadStylePropsType) => underCoat};
    &::before,
    &::after {
      background-color: ${({ baseCoat }: HeadStylePropsType) => baseCoat};
    }
  }

  ${LeftEar}, ${RightEar} {
    background-color: ${({ underCoat }: HeadStylePropsType) => underCoat};
    box-shadow: ${({ baseCoat }: HeadStylePropsType) =>
      `inset 0px 4px 0 7px ${baseCoat}`};
  }

  ${LeftEye}, ${RightEye} {
    background-color: ${({ eyeColor }: HeadStylePropsType) => eyeColor};
  }

  ${({ isButtFirst }: {isButtFirst: boolean}) =>
    isButtFirst &&
    css`
      transform: rotate(30deg) scale(1.1);
      top: -35px;
      left: -15px;
      box-shadow: 20px -4px 20px -15px #00000021;
    `}
`;
