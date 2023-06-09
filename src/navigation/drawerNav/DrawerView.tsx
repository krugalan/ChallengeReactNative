import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import {DrawerViewType} from './typings';

export const DrawerView = ({children}: DrawerViewType) => {
  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    // const scale = interpolate(drawerProgress.value, [0, 0.5], [1, 0.5]); // uncomment to add a cool animation
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [1, 0.4]);
    return {
      transform: [
        {rotateZ: `-${drawerProgress.value * 8}deg`},
        // {scale},// uncomment to add a cool animation
        {translateX: drawerProgress.value * 200},
        {translateY: drawerProgress.value * 60},
      ],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
