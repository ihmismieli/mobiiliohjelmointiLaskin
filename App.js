import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './Calculator';
import History from './History';
import './gesture-handler';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    {/* <SafeAreaView style={styles.container}> */}
      <Stack.Navigator 
        initialRouteName='Calculator'
        >
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name='History' component={History}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    {/* </SafeAreaView > */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
