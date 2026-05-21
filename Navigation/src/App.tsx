import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppStackParamList } from './Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { LoginPage, RegisterPage } from './screens';
import DashboardPage from './screens/DashboardPage/DashboardPage';
import RegisterProductPage from './screens/RegisterProductPage/RegisterProductPage';

enableScreens();

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#fff' },
          }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Dashboard" component={DashboardPage} />
          <Stack.Screen name="RegisterProduct" component={RegisterProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
