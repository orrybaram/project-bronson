import * as React from "react";
import styled from "react-emotion";
import { BodyColorsType } from "./types";
import posed from "react-pose";
import { lighten, transparentize } from "polished";

export const Wrapper = styled.div`
  position: relative;
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: -25px;
  border-radius: 50%;
  width: 116px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.08);
  left: 10px;
`;

export const Belly = styled.div`
  position: absolute;
  bottom: 5px;
  height: 42px;
  width: 40px;
  left: 6px;
  border-radius: 10px 28px 24px 40px;
`;

export const Spots = styled.div`
  background-color: ${({ secondaryBaseCoat }: { secondaryBaseCoat: string }) =>
    secondaryBaseCoat};
  position: absolute;
  right: 24px;
  top: -16px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  box-shadow: ${({ secondaryBaseCoat }: { secondaryBaseCoat: string }) =>
    `22px 23px 0 -6px ${transparentize(0.2, secondaryBaseCoat)},
  -18px 30px 0 -10px ${transparentize(0.4, secondaryBaseCoat)}`};
`;

export const Leg = styled.div`
  position: absolute;
  bottom: -10px;
  height: 10px;
  width: 18px;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 5px;
    width: 18px;
    border-radius: 0 0 4px 4px;
  }
`;

const waggingAnimation = (duration: number) => ({
  transform: "rotate(0deg)",
  transition: {
    type: "keyframes",
    values: ["rotate(10deg)", "rotate(-10deg)", "rotate(10deg)"],
    loop: Infinity,
    duration,
  }
});

const WaggingTail = posed.div({
  waggingSlow: waggingAnimation(1000),
  waggingFast: waggingAnimation(250),
});

export const Tail = styled(WaggingTail)`
  position: absolute;
  right: -5px;
  height: 10px;
  width: 15px;
  border-radius: 5px;
  top: 1px;
  transform-origin: center left;
`;

export const Leg1 = styled(Leg)`
  left: 20px;
  bottom: -9px;
`;

export const Leg2 = styled(Leg)`
  left: 40px;
`;

export const Leg3 = styled(Leg)`
  left: 80px;
  bottom: -9px;
`;

export const Leg4 = styled(Leg)`
  left: 100px;
`;

export const Torso = styled.div`
  overflow: auto;
  border-radius: 4px 10px 5px 30px;
  height: 50px;
  width: 120px;
  position: relative;
`;

export const Body = styled.div`
  position: relative;

  ${Belly} {
    background-color: ${({ underCoat }: BodyColorsType) => underCoat};
  }

  ${Torso}, ${Tail} {
    background-color: ${({ baseCoat }: BodyColorsType) => baseCoat};
  }

  ${Leg1}, ${Leg2}, ${Leg3}, ${Leg4} {
    background-color: ${({ baseCoat }: BodyColorsType) => baseCoat};

    &::after {
      background-color: ${({ underCoat }: BodyColorsType) => underCoat};
    }
  }
`;
