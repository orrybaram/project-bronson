import * as React from "react";
import { getRandomRange, getRandomArrayValue, delay } from "lib/utils";
import * as S from "./Confetti.styles";

const SPEED_TYPES = ["slow", "medium", "fast"];
const SHAPE_TYPES = ["round", "rectangle"];

type Shape = "round" | "rectangle";
type Speed = "slow" | "medium" | "fast";

type ConfettiType = {
  id: number;
  shape: Shape;
  speed: Speed;
  positionX: number;
  rotation: number;
}[];

const Confetti = () => {
  const [confetti, setConfetti] = React.useState<ConfettiType>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const dropConfetti = async () => {
    const containerWidth =
      containerRef && containerRef.current
        ? containerRef.current.offsetWidth
        : 0;

    const interval = getRandomRange(100, 300);
    const speed = SPEED_TYPES[getRandomArrayValue(SPEED_TYPES)];
    const shape = SHAPE_TYPES[getRandomArrayValue(SHAPE_TYPES)];
    const positionX = getRandomRange(0, containerWidth);
    const rotation = getRandomRange(0, 360);

    await delay(interval);

    confetti.push({
      speed,
      shape,
      rotation,
      positionX,
      id: new Date().getTime()
    });
    setConfetti(confetti);

    setTimeout(() => {
      confetti.shift();
      setConfetti(confetti);
    }, 15000);

    dropConfetti();
  };
  React.useMutationEffect(() => {
    dropConfetti();
  }, []);

  return (
    <S.ConfettiContainer innerRef={containerRef}>
      {confetti.map(({ id, speed, shape, positionX, rotation }) => (
        <S.Particle
          key={id}
          speed={speed}
          shape={shape}
          positionX={positionX}
          rotation={rotation}
        />
      ))}
    </S.ConfettiContainer>
  );
};

export default Confetti;

// const Confetti = (function () {
//   const confettiContainer = document.querySelector('.confetti-container');
//   const animationSpeeds = ['slow', 'medium', 'fast'];
//   const types = ['round', 'rectangle'];
//   let renderInterval = null;

//   function render() {
//     renderInterval = setInterval(() => {
//       const particle = document.createElement('div');

//       const particleType = types[Math.floor(Math.random() * types.length)];
//       const particleLeft = (Math.floor(Math.random() * confettiContainer.offsetWidth)) + 'px';
//       const particleAnimation = animationSpeeds[Math.floor(Math.random() * animationSpeeds.length)];

//       particle.classList.add(
//         'confetti__particle',
//         `confetti__particle--animation-${particleAnimation}`,
//         `confetti__particle--${particleType}`
//       );
//       particle.style.left = particleLeft;
//       particle.style.webkitTransform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

//       particle.removeTimeout = setTimeout(function() {
//         particle.parentNode.removeChild(particle);
//       }, 15000);

//       confettiContainer.appendChild(particle);
//     }, 300);
//   }

//   return {
//     render
//   }
// })();
