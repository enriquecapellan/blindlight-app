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
};

const Label: React.FC<TLabelProps> = ({ type, children }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

const Wrapper = styled(Text)<{ type?: LabelType }>`
  font-size: 20px;
  font-weight: 500;
  color: ${({ type }) => (type === 'PRIMARY' ? 'white' : 'black')};
`;

export default Label;
