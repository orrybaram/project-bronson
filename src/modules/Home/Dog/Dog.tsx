import * as React from "react";
import { Transition } from "react-pose";
import { PropsType } from "./types";
import * as S from "./Dog.styles";
import Head from "./Head";
import { getRandomRange, delay } from "../../../lib/utils";

type StateType = {
  excitementLevel: "low" | "high";
  isBlinking: boolean;
  isBarking: boolean;
  barks: { id: number; text: string }[];
};

export default class Dog extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      excitementLevel: "low",
      isBlinking: false,
      isBarking: false,
      barks: []
    };
  }

  componentDidMount() {
    this.startBlinking();
    // TODO: add this at some point
    // this.startBarking();
  }

  startBlinking = async () => {
    const interval = getRandomRange(1000, 15000);
    await delay(interval);
    this.setIsBlinking();
    this.startBlinking();
  };

  startBarking = async () => {
    const interval = getRandomRange(500, 2000);
    await delay(interval);
    this.setIsBarking();
    this.startBarking();
  };

  setIsBarking = () => {
    this.setState(
      {
        barks: [
          ...this.state.barks,
          { text: "Woof!", id: new Date().getTime() }
        ]
      },
      () => {
        setTimeout(() => {
          let barks = [...this.state.barks];
          barks.shift();

          this.setState({
            barks
          });
        }, 3000);
      }
    );
  };

  setIsBlinking = () => {
    this.setState(
      {
        isBlinking: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            isBlinking: false
          });
        }, 100);
      }
    );
  };

  onDogMouseEnter = () => {
    this.setState({
      excitementLevel: "high"
    });
  };

  onDogMouseLeave = () => {
    this.setState({
      excitementLevel: "low"
    });
  };

  onHeadMouseDown = () => {
    this.setState({
      isBlinking: true
    });
  };

  onHeadMouseUp = () => {
    this.setState({
      isBlinking: false
    });
  };

  render() {
    const { data } = this.props;
    const {
      underCoat,
      baseCoat,
      hasSpots,
      eyeColor,
      isButtFirst,
      spotStyles,
      heightModifier,
      scaleModifier,
      isFlipped,
    } = data;

    return (
      <S.Dog
        baseCoat={baseCoat}
        heightModifier={heightModifier}
        isButtFirst={isButtFirst}
        onMouseEnter={this.onDogMouseEnter}
        onMouseLeave={this.onDogMouseLeave}
        scaleModifier={scaleModifier}
        spotStyles={spotStyles}
        underCoat={underCoat}
        isFlipped={isFlipped}
      >
        <S.Shadow />
        <S.Body>
          <S.Tail
            initialPose="wagging"
            pose={
              this.state.excitementLevel === "low"
                ? "waggingSlow"
                : "waggingFast"
            }
          />
          <S.Legs>
            <S.Leg1 />
            <S.Leg2 />
            <S.Leg3 />
            <S.Leg4 />
          </S.Legs>
          <S.Torso>
            {hasSpots && (
              <S.Spots />
            )}

            {!isButtFirst && <S.Belly />}

            {isButtFirst && <S.Butt />}
          </S.Torso>
        </S.Body>
        <Head
          baseCoat={baseCoat}
          eyeColor={eyeColor}
          heightModifier={heightModifier}
          isBlinking={this.state.isBlinking}
          isButtFirst={isButtFirst}
          onMouseDown={this.onHeadMouseDown}
          onMouseUp={this.onHeadMouseUp}
          underCoat={underCoat}
        />
        <Transition>
          {this.state.barks.map((bark, i) => (
            <S.Bark key={bark.id}>{bark.text}</S.Bark>
          ))}
        </Transition>
      </S.Dog>
    );
  }
}
