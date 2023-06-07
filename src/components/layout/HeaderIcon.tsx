import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ToggleButton} from '../button/ToggleButton';
import {Base, Colors, Typography} from '../../styles';
import {HeaderIconType} from './typings';

export const HeaderIcon = ({title}: HeaderIconType) => {
  return (
    <>
      <View style={style.backIcon}>
        <ToggleButton />
      </View>
      <View style={style.fullWidthHeader}>
        <View style={style.flexCol} />
        <View style={style.containerTitle}>
          <Text style={style.textTitle}>{title}</Text>
        </View>
        <View style={style.flexCol} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  fullWidthHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  containerTitle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height:
      Platform.OS === 'ios'
        ? Base.screenHeight * 0.09
        : Base.screenHeight * 0.07,
  },
  textTitle: {
    fontSize: Typography.largeFont,
    color: Colors.dark.quinary,
  },
  flexCol: {
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height:
      Platform.OS === 'ios'
        ? Base.screenHeight * 0.115
        : Base.screenHeight * 0.075,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 35,
    width: Base.screenWidth,
    zIndex: 9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
