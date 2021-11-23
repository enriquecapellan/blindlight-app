import React from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const Screen: React.FC = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Wrapper>{children}</Wrapper>
    </TouchableWithoutFeedback>
  );
};

const Wrapper = styled(View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Screen;
