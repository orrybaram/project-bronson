import styled, { css } from 'react-emotion';

type Shape = "round" | "rectangle";
type Speed = "slow" | "medium" | "fast";

type ParticleStylePropsType = {
  shape: Shape;
  speed: Speed;
  positionX: number;
  rotation: number;
}

export const ConfettiContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Particle = styled.div`
  position: absolute;
  top: 0;
  height: 15px;
  width: 15px;
  background-color: white;
  left: ${({ positionX }: ParticleStylePropsType) => `${positionX}px`};
  transform: ${({ rotation }: ParticleStylePropsType) => `rotate(${rotation}deg)`};
  opacity: 0.7;

  ${({ shape }) => {
    if (shape === 'rectangle') {
      return css`
        width: 30px;
      `;
    } else if (shape === 'round') {
      return css`
        border-radius: 50%;
      `;
    }
  }}
`;