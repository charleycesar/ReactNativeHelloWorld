import React, { Component, Platform } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Alert
} from 'react-native';
import { Toolbar, Avatar, ScrollView, Subheader, ListItem, ToastAndroid } from 'react-native-material-ui';

export default class HomeScene extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [
        { title: "Charley Oliveira", regard: "Ganhe 100 pontos", local: "Grajau", latitude: 1, longitude:2 },
        { title: "Anthony", regard: "Ganhe 70 pontos", local: "Pavuna", latitude: 1, longitude:2 },
        { title: "Bruno Lima", regard: "Ganhe 65 pontos", local: "Botafogo", latitude: 1, longitude:2 },
        { title: "Mission Teste", regard: "Ganhe 89 pontos", local: "Online", latitude: 1, longitude:2 }
      ] };
    }
    componentDidMount() {

  		window.setInterval(() => {
  			console.log('interval')
  		}, 1000)

	    navigator.geolocation.getCurrentPosition(
	      (position) => {
	        var initialPosition = JSON.stringify(position);
	        console.log(initialPosition);
	        //this.setState({initialPosition});
	      },
	      (error) => alert(JSON.stringify(error)),
	      {enableHighAccuracy: false, timeout: 50000}
	    );
  	}

    render () {
        var listItems = this.state.items.map(function(item) {
          return (
            <ListItem
                divider
                leftElement="room"
                rightElement="info"
                centerElement={{
                    primaryText: item.title,
                    secondaryText: item.local,
                    tertiaryText: item.regard
                }}
                onPress={() => Alert.alert(
                  item.title,
                  item.local,
                  [
                    {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )}
            />
          );
        });
        return (
            <View style={styles.header}>
              <Toolbar
                leftElement="menu"
                centerElement="Missoes"
              />
              {listItems}
            </View>
        )
   	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    top: 20,
  },
});
