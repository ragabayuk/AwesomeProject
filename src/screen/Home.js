import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Home</Text>
      </View>
    )
  }
}

export default Home;