import {AnyAction, Dispatch} from 'redux';
import {NavigationProp} from '@react-navigation/native';

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
