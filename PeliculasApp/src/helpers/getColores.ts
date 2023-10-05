import {getColors} from 'react-native-image-colors';
export const getImageColors = async (uri: string) => {
  const colors = await getColors(uri, {});

  let primary, secondary;

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  }

  return [primary, secondary];
};
