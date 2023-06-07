import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';

export const LoadingSpinner = () => {
  return (
    <View style={styles.spinnerView}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark.quinary,
    zIndex: 9,
  },
});
