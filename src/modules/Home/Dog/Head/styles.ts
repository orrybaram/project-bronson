import styled from "react-emotion";
import { BodyColorsType } from "../types";

const Ear = styled.div`
  position: absolute;
  border-radius: 83px 82px 65px 64px / 106px 127px 33px 27px;
  width: 30px;
  height: 40px;
  top: -18px;
`;

export const LeftEar = styled(Ear)`
  left: -10px;
  transform: rotate(-30deg);
`;

export const RightEar = styled(Ear)`
  right: -10px;
  transform: rotate(30deg);
`;

const Eye = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: black;
  width: 15px;
  height: 15px;
  top: 28px;

  &::before {
    top: 4px;
    right: 10px;
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
  right: 10px;
`;

export const Head = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 45px 66px 32px 18px / 60px 52px 17px 32px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: -40px;
  left: -9px;

  ${Head} {
    background-color: ${({ coatColor }: BodyColorsType) => coatColor};
  }

  ${LeftEar}, ${RightEar} {
    background-color: ${({ bellyColor }: BodyColorsType) => bellyColor};
    box-shadow: ${({ coatColor }: BodyColorsType) =>
        `inset 0px 7px 0 3px${coatColor}`};
  }
`;
