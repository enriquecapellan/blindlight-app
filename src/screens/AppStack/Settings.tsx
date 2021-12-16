import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Screen from './../../components/screen';
import Switch from './../../components/switch';

import { AppContext } from './../../context/app';

const Settings = () => {
  const [{ vision }, setState] = useContext(AppContext);

  return (
    <Screen>
      <Wrapper>
        <Content>
          <Switch
            fullWidth
            label="Generar descripción"
            value={vision.generate_description}
            onToggle={value =>
              setState({ vision: { ...vision, generate_description: value } })
            }
          />
          <Switch
            fullWidth
            label="Identificar objetos"
            value={vision.extract_labels}
            onToggle={value =>
              setState({ vision: { ...vision, extract_labels: value } })
            }
          />
          <Switch
            fullWidth
            label="Leer Texto"
            value={vision.extract_text}
            onToggle={value =>
              setState({ vision: { ...vision, extract_text: value } })
            }
          />
          <Switch
            fullWidth
            label="Activar Flash"
            value={vision.activateFlash}
            onToggle={value =>
              setState({ vision: { ...vision, activateFlash: value } })
            }
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
