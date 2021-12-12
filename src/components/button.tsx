import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Label from './label';

type TButtonProps = {
  label: string;
  onPress?: () => void;
  type?: ButtonType;
};

type ButtonType =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'SUCCESS'
  | 'DANGER'
  | 'WARNING'
  | 'INFO';

const Button: React.FC<TButtonProps> = ({ label, type, onPress }) => {
  return (
    <Wrapper type={type} onPress={onPress}>
      <Label type={type}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)<{ type?: ButtonType }>`
  height: 54px;
  width: 90%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  background-color: ${({ type }) =>
    type === 'PRIMARY' ? 'rgba(99,89,227,255)' : 'rgba(231,236,254,255)'};
`;

export default Button;
