import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {DrawerContent} from './drawerNav/DrawerContent';
import {Colors} from '../styles';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const handleDrawerContent = (data: any) => <DrawerContent {...data} />;

  return (
    <Drawer.Navigator
      backBehavior="none"
      initialRouteName="TabNavigatorHome"
      screenOptions={{
        drawerType: 'front',
        overlayColor: '#00000050',
        drawerStyle: styles.drawerStyles,
        sceneContainerStyle: styles.bgScene,
        headerShown: false,
      }}
      drawerContent={handleDrawerContent}>
      <Drawer.Screen name="TABNAV" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  container: {flex: 1},
  bgScene: {backgroundColor: Colors.scene},
  sceneOpened: {borderTopStartRadius: 50, marginTop: 50},
});
