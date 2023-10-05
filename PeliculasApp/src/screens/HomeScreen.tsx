/* eslint-disable react-native/no-inline-styles */
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColores';

const windowsWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary, secondary] = await getImageColors(uri);

    console.log({primary, secondary});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={'red'} size={50} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20, padding: 5}}>
          <View
            style={{
              height: 415,
            }}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowsWidth}
              itemWidth={290}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populares" peliculas={popular} />
          <HorizontalSlider title="Mejores valoradas" peliculas={topRated} />
          <HorizontalSlider title="Próximos" peliculas={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
