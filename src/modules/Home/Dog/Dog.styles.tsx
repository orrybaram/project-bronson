import styled, { css } from "react-emotion";
import posed from "react-pose";
import colors from "lib/colors";

export const BARK_TRANSITION_TIME = 2000;

type DogStylePropsType = {
  baseCoat: string;
  heightModifier: number;
  isButtFirst: boolean;
  isFlipped: boolean;
  scaleModifier: number;
  spotStyles: { [key: string]: string };
  underCoat: string;
}

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

export const Butt = styled.div`
  position: absolute;
  bottom: 5px;
  height: 36px;
  width: 27px;
  right: 15px;
  border-radius: 57px 26px 39px 25px;
  transform: rotate(6deg);

  &::after {
    content: "";
    position: absolute;
    height: 36px;
    width: 27px;
    right: -26px;
    border-radius: 26px 57px 25px 39px;
    top: -3px;
    transform: rotate(-12deg);
  }
  &::before {
    content: "";
    position: absolute;
    height: 6px;
    width: 6px;
    right: -1px;
    border-radius: 50%;
    top: 1px;
    z-index: 1;
    background-color: ${colors.red[10]};
  }
`;


export const Spots = styled.div`
  position: absolute;
  right: 24px;
  top: -16px;
  border-radius: 50%;
`;

export const Leg = styled.div`
  position: absolute;
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
    duration
  }
});

const WaggingTail = posed.div({
  waggingSlow: waggingAnimation(1000),
  waggingFast: waggingAnimation(250)
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

export const Legs = styled.div`
  position: absolute;
  bottom: 0px;
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

const AnimatedTorso = posed.div({
  draggable: "x",
  dragBounds: {
    left: "-2%",
    right: "2%"
  }
});

export const Torso = styled(AnimatedTorso)`
  overflow: hidden;
  border-radius: 4px 10px 5px 30px;
  height: 50px;
  width: 120px;
  position: relative;
`;

const AnimatedBark = posed.div({
  exit: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 0.5
  },
  enter: {
    opacity: 0,
    scale: 1,
    y: -100,
    x: -50,
    transition: {
      duration: BARK_TRANSITION_TIME,
    },
    applyAtStart: { display: "block" },
    applyAtEnd: { display: "none" }
  }
});

export const BarkText = styled.div`
  font-weight: bold;
`;

export const Bark = styled(AnimatedBark)`
  display: none;
  position: absolute;
  top: -8px;
  border-radius: 15px;
  left: -78px;
  padding: 10px;
  background: ${colors.neutral[0]};
`;

export const Body = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Dog = styled.div`
  position: relative;
  transform: ${({ scaleModifier }: { scaleModifier: number}) => `scale(${scaleModifier})`};
  transform-origin: bottom;

  ${({ isFlipped }: DogStylePropsType) => isFlipped && css`
    transform: scaleX(-1);

    ${BarkText} {
      transform: scaleX(-1);
    }
  `}

  ${Belly}, ${Butt} {
    background-color: ${({ underCoat }: DogStylePropsType) => underCoat};
  }

  ${Butt} {
    &::after {
      background-color: ${({ underCoat }: DogStylePropsType) => underCoat};
    }
  }

  ${Torso}, ${Tail} {
    background-color: ${({ baseCoat }: DogStylePropsType) => baseCoat};
    top: ${({ heightModifier }: DogStylePropsType) => `${heightModifier}px`};
  }

  ${Leg1}, ${Leg2}, ${Leg3}, ${Leg4} {
    background-color: ${({ baseCoat }: DogStylePropsType) => baseCoat};

    &::after {
      background-color: ${({ underCoat }: DogStylePropsType) => underCoat};
    }
  }

  ${({ spotStyles }: DogStylePropsType) => spotStyles && css({
    [`${Spots}`]: {
      ...spotStyles,
    }
  })}

  ${({ isButtFirst }: DogStylePropsType) =>
    isButtFirst &&
    css`
      ${Legs} {
        transform: scaleX(-1);
        right: -18px;
        bottom: 1px;
      }
      ${Tail} {
        z-index: 1;
        right: 3px;
        height: 12px;
        width: 16px;
      }
      ${Torso} {
        border-radius: 4px 30px 5px 30px;
      }
    `}
`;
