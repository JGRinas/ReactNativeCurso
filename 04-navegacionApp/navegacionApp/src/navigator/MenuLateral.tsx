import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Text, Image, View, useWindowDimensions} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
export default MenuLateral;

const MenuInterno = ({navigation}: any) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuTexto}>Navegacion Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>Navegacion Stack</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
