import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {LoadingSpinner} from './src/components/shared/LoadingSpinner';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
