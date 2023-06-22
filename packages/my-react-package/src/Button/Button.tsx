import { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
`;

export type ButtonProps = {
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ disabled }) => {
  return <StyledButton disabled={disabled}>Test</StyledButton>;
};
