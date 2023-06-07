import {baseUnit, baseTextColor, baseFontFamily} from './base';

const heading = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit * 3,
  fontWeight: 'bold',
};

const subheading = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit * 2,
  fontWeight: 'bold',
};

const regheading = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit * 1.6,
  fontWeight: 'bold',
};

const smallheading = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit * 1.3,
  fontWeight: 'bold',
};

const title = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit + 2,
};

const subTitle = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit - 4,
};

const regular = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit * 1.9,
};

const small = {
  fontFamily: baseFontFamily,
  color: baseTextColor,
  fontSize: baseUnit - 5,
};

const regularFont = baseUnit * 1.9;
const largeFont = baseUnit * 2.5;
const midLargeFont = baseUnit * 2;
const midFont = baseUnit * 1.5;
const smallFont = baseUnit * 1.2;

export {
  heading,
  subheading,
  title,
  subTitle,
  regular,
  small,
  regularFont,
  largeFont,
  midLargeFont,
  midFont,
  smallFont,
  smallheading,
  regheading,
};
