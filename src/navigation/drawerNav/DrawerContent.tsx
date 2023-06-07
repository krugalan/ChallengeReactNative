import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {selectNavPathSelector} from '../../store/selectors';
import {DrawerItemChildType, MenuItemType} from './typings';
import {setNavPathSelected} from '../../store/actions';
import {Colors} from '../../styles';

export const DrawerContent = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const activeTab = useSelector(selectNavPathSelector);

  const menuItems: MenuItemType[] = [
    {label: 'Start', link: 'HOME'},
    {label: 'Your Cart', link: 'SCREEN1'},
    {label: 'Favourites', link: 'SCREEN2'},
    {label: 'Your Orders', link: 'CONTACT'},
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      style={styles.drawerContent}>
      <FlatList
        data={menuItems}
        renderItem={({item}) =>
          DrawerItemChild({item, navigation, activeTab, dispatch})
        }
      />
    </DrawerContentScrollView>
  );
};

const DrawerItemChild = ({
  item,
  navigation,
  activeTab,
  dispatch,
}: DrawerItemChildType) => {
  const {label, link} = item;
  const handlePressLink = () => {
    navigation.navigate(link);
    dispatch(setNavPathSelected(link));
  };

  const active = activeTab === link;

  return (
    <TouchableOpacity
      onPress={handlePressLink}
      style={[
        styles.drawerLblStyleContainer,
        active && styles.drawerLblStyleActiveContainer,
      ]}>
      <Text
        style={[styles.drawerLblStyle, active && styles.drawerLblStyleActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    top: '10%',
  },
  drawerLblStyle: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.white,
    padding: 10,
  },
  drawerLblStyleActive: {
    color: Colors.primary.regular,
  },
  drawerLblStyleContainer: {
    marginBottom: 10,
    left: 10,
    width: '65%',
  },
  drawerLblStyleActiveContainer: {
    backgroundColor: Colors.secondary.regular,
    borderRadius: 15,
  },
});
