import styled, { css } from "react-emotion";
import posed from "react-pose";
import { linear } from "@popmotion/easing";
import { getRandomRange } from "lib/utils";

type Shape = "round" | "rectangle";
type Speed = "slow" | "medium" | "fast";

type ParticleStylePropsType = {
  shape: Shape;
  speed: Speed;
  positionX: number;
  rotation: number;
};

export const FALLING_DURATION = 5000;
const WIND_FACTOR = getRandomRange(0, 200);

export const ConfettiContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

const AnimatedParticle = posed.div({
  falling: {
    transform: "translateY(10px)",
    transition: ({ rotation }: ParticleStylePropsType) => {
      const endRotation = getRandomRange(-50, 50);
      return {
        type: "keyframes",
        values: [
          `translateY(0vh) translateX(0px) rotate(${rotation}deg)`,
          `translateY(110vh) translateX(${WIND_FACTOR}px) rotate(${rotation + endRotation}deg)`
        ],
        duration: FALLING_DURATION,
        easings: [linear]
      };
    }
  }
});

export const Particle = styled(AnimatedParticle)`
  position: absolute;
  top: -20px;
  height: 15px;
  width: 15px;
  background-color: white;
  left: ${({ positionX }: ParticleStylePropsType) => `${positionX}px`};
  transform: ${({ rotation }: ParticleStylePropsType) =>
    `rotate(${rotation}deg)`};
  opacity: 0.7;

  ${({ shape }) => {
    if (shape === "round") {
      return css`
        border-radius: 50%;
      `;
    }
  }}
`;
