import {AnyAction, Dispatch} from 'redux';
import {NavigationProp} from '@react-navigation/native';
import {ReactNode} from 'react';

export type MenuItemType = {
  label: string;
  link: string;
};

export type DrawerItemChildType = {
  item: MenuItemType;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  activeTab: string;
  dispatch: Dispatch<AnyAction>;
};

export type DrawerViewType = {
  children: ReactNode;
};
