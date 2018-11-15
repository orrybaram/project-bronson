import styled from "react-emotion";
import { BodyColorsType } from "../types";
import colors from "../../../../colors";

const Ear = styled.div`
  position: absolute;
  border-radius: 83px 82px 65px 64px / 106px 127px 33px 27px;
  width: 35px;
  height: 50px;
  top: -15px;
`;

export const Tongue = styled.div`
  position: absolute;
  border-radius: 0 0 10px 10px;
  background-color: ${colors.red[20]};
  width: 12px;
  height: 11px;
  top: 60px;
  left: 22px;
`;

export const LeftEar = styled(Ear)`
  left: -20px;
  transform: rotate(-50deg);
`;

export const Nose = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.neutral[90]};
  width: 15px;
  height: 10px;
  bottom: 3px;
  left: 17px;
`;

export const RightEar = styled(Ear)`
  right: -20px;
  transform: rotate(50deg);
`;

const Eye = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.neutral[90]};
  width: 12px;
  height: 12px;
  top: 30px;

  &::before {
    top: 4px;
    left: 1px;
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
  right: 14px;
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
    background-color: ${({ baseCoat }: BodyColorsType) => baseCoat};
  }

  ${LeftEar}, ${RightEar} {
    background-color: ${({ underCoat }: BodyColorsType) => underCoat};
    box-shadow: ${({ baseCoat }: BodyColorsType) =>
      `inset 0px 4px 0 7px ${baseCoat}`};
  }
`;
