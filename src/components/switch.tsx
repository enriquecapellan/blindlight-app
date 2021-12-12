import React from 'react';
import { Switch as SwitchRoot, View } from 'react-native';
import styled from 'styled-components';

import Label from './label';

type Props = {
  label: string;
  value: boolean;
  fullWidth?: boolean;
  onToggle: (value: boolean) => void;
};

const Switch: React.FC<Props> = ({
  label,
  value,
  fullWidth,
  onToggle,
  ...props
}) => {
  return (
    <Wrapper fullWidth={fullWidth}>
      <Label>{label}</Label>
      <SwitchRoot
        value={value}
        onValueChange={() => onToggle(!value)}
        {...props}
      />
    </Wrapper>
  );
};

const Wrapper = styled(View)<{ fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
`;

export default Switch;
