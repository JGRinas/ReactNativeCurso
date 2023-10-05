/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInterfaces';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(',')}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Historia
          </Text>
          <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Presupuesto
          </Text>
          <Text>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(movieFull.budget)}
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
        </View>
      </View>
    </>
  );
};
