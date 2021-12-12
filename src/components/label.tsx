import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

type LabelType =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'SUCCESS'
  | 'DANGER'
  | 'WARNING'
  | 'INFO';

type TLabelProps = {
  type?: LabelType;
  space?: number;
};

const Label: React.FC<TLabelProps> = ({ type, children, space }) => {
  return (
    <Wrapper type={type} space={space}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Text)<{ type?: LabelType; space?: number }>`
  font-size: 20px;
  font-weight: 500;
  color: ${({ type }) =>
    type === 'PRIMARY'
      ? 'white'
      : type === 'INFO'
      ? 'black'
      : 'rgba(99,89,227,255)'};
  margin-bottom: ${({ space }) => space || 5}px;
`;

export default Label;
