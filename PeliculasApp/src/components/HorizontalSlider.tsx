/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {MoviePoster} from './MoviePoster';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  peliculas: Movie[];
  title?: string;
}

export const HorizontalSlider = ({peliculas, title}: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>}
      <FlatList
        data={peliculas}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
