import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

// Scenes
import LoginScene from './scenes/LoginScene'
import HomeScene from './scenes/HomeScene'

const uiTheme = {
    palette: {
      primaryColor: COLOR.indigo500,
    },
    buttonRaised: {
      container: {
        backgroundColor: COLOR.indigo500,
      },
      text: {
        color: '#FFFFFF'
      }
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class Mission extends Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Router>
                  <Scene key='login' component={LoginScene} hideNavBar={true} />
                  <Scene key='HomePage' type='reset' component={HomeScene} hideNavBar={true} initial={true} title='Mission'/>
                </Router>
            </ThemeProvider>
        );
    }
}
