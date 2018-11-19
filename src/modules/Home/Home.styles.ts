import styled from "react-emotion";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor};
  padding: 20px;
  height: 100vh;
`;

export const Name = styled.h4`
  margin-top: 40px;
  opacity: 0.3;
  font-size: 16px;
`;