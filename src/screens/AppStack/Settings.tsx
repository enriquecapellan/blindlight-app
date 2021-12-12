import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Screen from './../../components/screen';
import Switch from './../../components/switch';

const Settings = () => {
  const [state, setSate] = useState({
    readText: true,
    generateDescription: true,
    extractObjects: true,
  });

  return (
    <Screen>
      <Wrapper>
        <Content>
          <Switch
            fullWidth
            label="Generar descripción"
            value={state.generateDescription}
            onToggle={value =>
              setSate({ ...state, generateDescription: value })
            }
          />
          <Switch
            fullWidth
            label="Identificar objetos"
            value={state.extractObjects}
            onToggle={value => setSate({ ...state, extractObjects: value })}
          />
          <Switch
            fullWidth
            label="Leer Texto"
            value={state.readText}
            onToggle={value => setSate({ ...state, readText: value })}
          />
          <Switch
            fullWidth
            label="Activar Flash"
            value={state.readText}
            onToggle={value => setSate({ ...state, readText: value })}
          />
        </Content>
      </Wrapper>
    </Screen>
  );
};

const Wrapper = styled(View)`
  width: 100%;
  padding: 20px;
  display: flex;
  flex: 1;
`;

const Content = styled(View)`
  width: 100%;
  padding: 20px;
  background: rgba(231, 236, 254, 255);
  border-radius: 16px;
`;

export default Settings;
