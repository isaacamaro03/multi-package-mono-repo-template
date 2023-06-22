import { FC } from 'react';
import styled from 'styled-components';

export type TextFieldProps = {
  readOnly?: boolean;
};

const StyledInput = styled.input`
  border: 1px solid red;
`;

export const TextField: FC<TextFieldProps> = ({ readOnly }) => {
  return <StyledInput readOnly={readOnly}></StyledInput>;
};
