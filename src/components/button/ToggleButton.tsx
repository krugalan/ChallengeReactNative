import React from 'react';
import {TouchableOpacity} from 'react-native';
import IconToggle from '../layout/IconToggle';
import {useNavigation} from '@react-navigation/native';

export const ToggleButton = () => {
  const navigation = useNavigation();

  const handlToggleDrawer = () => navigation.toggleDrawer();
  return (
    <TouchableOpacity onPress={handlToggleDrawer}>
      <IconToggle />
    </TouchableOpacity>
  );
};
