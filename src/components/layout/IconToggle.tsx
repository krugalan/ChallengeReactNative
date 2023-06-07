import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../../styles';

const IconToggleXml = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <path d="M5 7H19" stroke="${Colors.dark.quinary}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12L19 12" stroke="${Colors.dark.quinary}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 17L19 17" stroke="${Colors.dark.quinary}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
const IconToggle = ({width = 80, height = 80}) => {
  return (
    <SvgXml
      width={width}
      height={height}
      xml={IconToggleXml()}
      viewBox="0 0 35 25"
    />
  );
};

export default IconToggle;
