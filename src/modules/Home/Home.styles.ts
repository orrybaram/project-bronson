import styled from "react-emotion";
import { lighten } from 'polished';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ backgroundColor }: { backgroundColor: string }) =>
    `radial-gradient(${lighten(0.05, backgroundColor)}, ${backgroundColor})`};
  padding: 20px;
  height: 100vh;
`;

export const Name = styled.h4`
  margin-top: 40px;
  opacity: 0.3;
  font-size: 16px;
`;