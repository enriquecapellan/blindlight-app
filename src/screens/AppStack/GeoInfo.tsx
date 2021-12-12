import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import { ScreenWrapper } from './../../components/screen';
import Label from './../../components/label';

import { get_nearby_places } from '../../api';

type Place = {
  name: string;
  id: string;
  location: string;
  rating: string;
  opening_hours: {
    open_now?: boolean;
  };
  types: string[];
};

const GeoInfo = () => {
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState<GeolocationResponse>();
  const [places, setPlaces] = useState<Place[]>([]);

  const getOneTimeLocation = () => {
    setStatus('Obteniendo ubicación...');
    Geolocation.getCurrentPosition(
      position => {
        setStatus('Ubicación obtenida, cargando información...');
        setLocation(position);
      },
      error => {
        setStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    async function fetchPlaces(location: GeolocationResponse) {
      const { data } = await get_nearby_places(
        location.coords.latitude,
        location.coords.longitude,
      );
      setPlaces(data.slice(1));
      setStatus('loaded');
    }

    location && fetchPlaces(location);
  }, [location]);

  useEffect(() => {
    getOneTimeLocation();
  }, []);

  const renderItem = ({
    item,
    index,
    separators,
  }: {
    item: Place;
    index: number;
    separators: any;
  }) => {
    return (
      <Item>
        <Label>
          {`${item.name}.
${item.location && `Ubicación: ${item.location}.`}
${item.types?.length && `Tipo: ${item.types.join(', ')}.`}
${item.rating && `Puntuación: ${item.rating}.`}
${item.opening_hours?.open_now ? 'Abierto Ahora.' : ''}
`}
        </Label>
      </Item>
    );
  };

  return (
    <ScreenWrapper>
      {status == 'loaded' ? (
        <FlatList
          style={{ width: '100%', padding: 20, overflow: 'hidden' }}
          scrollEnabled={true}
          data={places}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.id}
        />
      ) : (
        <Label>{status}</Label>
      )}
    </ScreenWrapper>
  );
};

const Item = styled(View)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-top: 15px;
`;

const Separator = styled(View)`
  width: 100%;
  height: 0.5px;
  background-color: gray;
`;

export default GeoInfo;
