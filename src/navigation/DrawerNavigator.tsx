import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {DrawerContent} from './drawerNav/DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = props => {
  const handleDrawerContent = (data: any) => <DrawerContent {...data} />;

  return (
    <Drawer.Navigator
      backBehavior="none"
      initialRouteName="TabNavigatorHome"
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
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
  bgScene: {backgroundColor: '#1b172b'},
  sceneOpened: {borderTopStartRadius: 50, marginTop: 50},
});
