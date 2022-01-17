import * as React from 'react';
import {Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../helpers/navigation-ref';
import {BooksListScreen, ItemScreen} from '../containers';
import {Spinner} from '../components';
import {defaultTheme} from '../constants';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const config = {
  screens: {
    ItemScreen: 'book/:id',
  },
};

const linking = {
  prefixes: ['books://'],
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (url != null) {
      return url;
    }
  },
  config,
};

export const Navigator = () => {
  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator initialRouteName="BooksListScreen">
        <Stack.Screen
          options={{
            title: 'Books List',
            headerStyle: {
              backgroundColor: defaultTheme.primary,
            },
          }}
          name="BooksListScreen"
          component={BooksListScreen}
        />
        <Stack.Screen
          options={{
            title: 'Book',
            headerStyle: {
              backgroundColor: defaultTheme.primary,
            },
          }}
          name="ItemScreen"
          component={ItemScreen}
        />
      </Stack.Navigator>
      <Spinner />
    </NavigationContainer>
  );
};
