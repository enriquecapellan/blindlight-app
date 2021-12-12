import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { RNCamera } from 'react-native-camera';

import speak from '../../utils/speech';

import { getImageLabels, describeImage, getImageText } from './../../api';

import Label from './../../components/label';

const Vision = () => {
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
            const descResponse = await describeImage(file.result);
            const description = descResponse.data;
            const textResponse = await getImageText(file.result);
            let text = textResponse.data.TextDetections.filter(
              (detc: any) => detc.Type == 'LINE',
            )
              .map((detc: any) => detc.DetectedText)
              .join(', ');
            const labelsResponse = await getImageLabels(file.result);
            const labels = labelsResponse.data.join(', ');
            text = text && `Texto: ${text}`;

            const sentence = `${description}. Objetos: ${labels}. ${text}`;
            // setText(sentence);
            speak(sentence, () => setText('Identificar'));
          } catch (error) {
            setText('Ha ocurrido un error.');
            console.log(error);
          } finally {
            setText('Identificar')
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
