/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 18,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 9,
    marginHorizontal: 10,
    paddingTop: 5,

    paddingRight: 15,
  },
  image: {
    width: 50,
    height: 55,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 18,
    opacity: 0.7,
  },
});
