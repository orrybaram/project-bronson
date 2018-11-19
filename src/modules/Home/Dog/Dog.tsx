import * as React from "react";
import { Transition } from "react-pose";
import * as S from "./Dog.styles";
import Head from "./Head";
import { getRandomRange, delay } from "lib/utils";

export type PropsType = {
  baseCoat: string;
  eyeColor: string;
  hasSpots: boolean;
  heightModifier: number;
  isBarking: boolean;
  isButtFirst: boolean;
  isFlipped: boolean;
  scaleModifier: number;
  spotStyles: { [key: string]: string };
  underCoat: string;
};

type BarksType = { id: number, text: string }[]

const Dog = ({
  baseCoat,
  eyeColor,
  hasSpots,
  heightModifier,
  isBarking,
  isButtFirst,
  isFlipped,
  scaleModifier,
  spotStyles,
  underCoat,
}: PropsType) => {
  const [excitementLevel, setExcitmentLevel] = React.useState("low");
  const [isBlinking, setIsBlinking] = React.useState(false);
  const [barks, setBarks] = React.useState<BarksType>([]);

  const onDogMouseEnter = () => setExcitmentLevel("high");
  const onDogMouseLeave = () => setExcitmentLevel("low");
  const onHeadMouseDown = () => setIsBlinking(true);
  const onHeadMouseUp = () => setIsBlinking(false);

  const startBlinking = async () => {
    const interval = getRandomRange(1000, 10000);
    await delay(interval);
    setIsBlinking(true);
    setIsBlinking(false);
    startBlinking();
  };

  const startBarking = async () => {
    const interval = getRandomRange(500, 2000);
    await delay(interval);

    barks.push({ text: "Woof!", id: new Date().getTime() });
    setBarks(barks);

    setTimeout(() => {
      barks.shift();
      setBarks(barks)
    }, S.BARK_TRANSITION_TIME);

    startBarking();
  };

  React.useEffect(() => { startBlinking() }, []);
  // React.useMutationEffect(() => { startBarking() },[]);

  return (
    <S.Dog
      baseCoat={baseCoat}
      heightModifier={heightModifier}
      isButtFirst={isButtFirst}
      onMouseEnter={onDogMouseEnter}
      onMouseLeave={onDogMouseLeave}
      scaleModifier={scaleModifier}
      spotStyles={spotStyles}
      underCoat={underCoat}
      isFlipped={isFlipped}
    >
      <S.Shadow />
      <S.Body>
        <S.Tail
          initialPose="wagging"
          pose={excitementLevel === "low" ? "waggingSlow" : "waggingFast"}
        />
        <S.Legs>
          <S.Leg1 />
          <S.Leg2 />
          <S.Leg3 />
          <S.Leg4 />
        </S.Legs>
        <S.Torso>
          {hasSpots && <S.Spots />}

          {!isButtFirst && <S.Belly />}

          {isButtFirst && <S.Butt />}
        </S.Torso>
      </S.Body>
      <Head
        baseCoat={baseCoat}
        eyeColor={eyeColor}
        heightModifier={heightModifier}
        isBlinking={isBlinking}
        isButtFirst={isButtFirst}
        onMouseDown={onHeadMouseDown}
        onMouseUp={onHeadMouseUp}
        underCoat={underCoat}
      />
      <Transition>
        {barks.map((bark, i) => (
          <S.Bark key={bark.id}>
            <S.BarkText>{bark.text}</S.BarkText>
          </S.Bark>
        ))}
      </Transition>
    </S.Dog>
  );
};

export default Dog;
