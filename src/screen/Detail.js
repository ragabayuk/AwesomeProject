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

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Hello World</Text>
      </View>
    )
  }
}

export default Detail;