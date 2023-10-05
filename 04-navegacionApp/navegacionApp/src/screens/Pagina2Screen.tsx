import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Pagina2Screen = () => {
  const navigator = useNavigation<StackNavigationProp<any, 'Pagina2Screen'>>();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigator.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Juan',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Ir a persona</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigator.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Gabriel',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Ir a persona 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
