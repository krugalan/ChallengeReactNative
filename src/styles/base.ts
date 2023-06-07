import {Platform, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const baseFontFamily = Platform.OS === 'ios' ? 'Roboto' : 'Roboto';

const buttonWidth = screenWidth;
const buttonHeight = screenHeight * 0.055;
const baseUnit = 10;

// Typography
const baseTextColor = 'white';

const baseTxtTitleLg = screenWidth * 0.07;
const baseTxtTitleMd = screenWidth * 0.06;
const baseTxtTitleNormal = screenWidth * 0.044;

const baseTxtBig = screenWidth * 0.06;
const baseTxtNormal = screenWidth * 0.044;
const baseTxtSmall = screenWidth * 0.038;
const baseTxtXSmall = screenWidth * 0.03;

export {
  baseTextColor,
  baseTxtTitleLg,
  baseTxtTitleMd,
  baseTxtTitleNormal,
  baseTxtBig,
  baseTxtNormal,
  baseTxtSmall,
  baseTxtXSmall,
  baseFontFamily,
  screenWidth,
  screenHeight,
  buttonWidth,
  buttonHeight,
  baseUnit,
};
