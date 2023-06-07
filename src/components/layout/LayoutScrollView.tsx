import React from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import {Base} from '../../styles';

type LayoutScrollViewType = {
  children: any;
  style?: any;
  align?: string | undefined;
};
export const LayoutScrollView = ({
  children,
  style: styleCustom,
  align = 'center',
}: LayoutScrollViewType) => {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.fullScreenScrollContainer,
        styles.platformStyle,
        {alignItems: align},
        styleCustom,
      ]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullScreenScrollContainer: {
    marginTop: Platform.OS === 'ios' ? 25 : 5,
    width: Base.screenWidth,
  },
  platformStyle: {
    paddingHorizontal: Base.screenWidth * 0.05,
  },
});
