import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigator} from './StackNavigator';
import {HeaderIcon} from '../components/layout/HeaderIcon';
import {DrawerView} from './drawerNav/DrawerView';
import {Contact} from '../features/Contact';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const headerIcon = (title: string) => <HeaderIcon title={title} />;

  return (
    <DrawerView>
      <Tab.Navigator sceneContainerStyle={styles.sceneOpened}>
        <Tab.Screen
          name="HOME"
          component={StackNavigator}
          options={{header: () => headerIcon(' START')}}
        />
        <Tab.Screen
          name="CONTACT"
          component={Contact}
          options={{header: () => headerIcon(' CONTACT')}}
        />
      </Tab.Navigator>
    </DrawerView>
  );
};

const styles = StyleSheet.create({
  sceneOpened: {borderTopStartRadius: 50},
});
