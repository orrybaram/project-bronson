import * as React from "react";
import { getRandomRange, getRandomArrayValue, delay } from "lib/utils";
import * as S from "./Confetti.styles";

const SPEED_TYPES: Speed[] = ["slow", "medium", "fast"];
const SHAPE_TYPES: Shape[] = ["round", "rectangle"];
const CONFETTI_DURATION = 5000;

type Shape = 'round' | 'rectangle';
type Speed = 'slow' | 'medium' | 'fast';

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
    const speed: Speed = SPEED_TYPES[getRandomArrayValue(SPEED_TYPES)];
    const shape: Shape = SHAPE_TYPES[getRandomArrayValue(SHAPE_TYPES)];
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
    }, CONFETTI_DURATION);

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
          initialPose="falling"
          pose="falling"
        />
      ))}
    </S.ConfettiContainer>
  );
};

export default Confetti;
