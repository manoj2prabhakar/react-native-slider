
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform,
  PermissionsAndroid 
} from 'react-native';
import CustomSlider from './Slider';

class App extends Component {

  state = {
    slideValue: 0,
  }

  constructor(){
    super();
  }

  render() {
    return(
      <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
        <CustomSlider 
          style={{ 
            height: 30,
            width: 300,
            backgroundColor: '#d3d3d3',
            selectionColor: 'blue'
          }}
          value={this.state.slideValue}     
          onValueChange={(value)=> this.setState({ slideValue: value})}     
        />
      </View>
    )
  }
}

export default App;
