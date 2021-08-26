import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Profil from './src/screen/Profil';
import Detail from './src/screen/Detail';

function Dashboard({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{flex:1}}>
      <Text>Halaman Awal</Text>
      <TouchableOpacity style={{backgroundColor: "#5e72e4", height: 30}} onPress={() => navigation.navigate('Profile')}>
        <Text style={{alignSelf: "center", justifyContent: "center"}}>HOME</Text>
      </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#5e72e4", height: 30}}>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Profil} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;