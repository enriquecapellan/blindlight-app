import React from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const Screen: React.FC = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScreenWrapper>{children}</ScreenWrapper>
    </TouchableWithoutFeedback>
  );
};

export const ScreenWrapper = styled(View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default Screen;
