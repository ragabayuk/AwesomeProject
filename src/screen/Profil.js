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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Profil extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Profil</Text>
      </View>
    )
  }
}

export default Profil;