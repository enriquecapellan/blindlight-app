import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { RNCamera } from 'react-native-camera';

import speak from '../../utils/speech';

import { analyzeImage } from './../../api';

import Label from './../../components/label';
import { AppContext } from '../../context/app';

const Vision = () => {
  const appState = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const [text, setText] = useState('Identificar');

  const takePicture = async function (camera: RNCamera) {
    const options = { width: 500, quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);

    const request = new XMLHttpRequest();
    request.onload = () => {
      const file = new FileReader();
      file.onloadend = async () => {
        if (typeof file.result == 'string') {
          try {
            setText('Identificando');
            setLoading(true);

            const { generate_description, extract_labels, extract_text } =
              (appState && appState[0].vision) || {};

            const response = await analyzeImage({
              image: file.result,
              generate_description,
              extract_labels,
              extract_text,
            });
            const { data } = response;

            console.log(data)
            console.log(response)

            let { description, text, labels } = data;

            text = text
              ? text.TextDetections.filter((detc: any) => detc.Type == 'LINE')
                  .map((detc: any) => detc.DetectedText)
                  .join(', ')
              : '';

            labels = labels && `Objetos: ${labels.join(', ')}.`;
            text = text.trim() && `Texto: ${text}`;

            const sentence = `${description || ''} ${labels} ${text}`;
            speak(sentence, () => setText('Identificar'));
          } catch (error) {
            setText('Ha ocurrido un error.');
            console.log(error);
          } finally {
            setText('Identificar');
            setLoading(false);
          }
        }
      };

      file.readAsDataURL(request.response);
    };

    request.open('GET', data.uri);
    request.responseType = 'blob';
    request.send();
  };

  return (
    <Camera>
      {({ camera }) => (
        <Button disabled={loading} onPress={() => takePicture(camera)}>
          <Label>{text}</Label>
        </Button>
      )}
    </Camera>
  );
};

const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled(TouchableOpacity)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export default Vision;
