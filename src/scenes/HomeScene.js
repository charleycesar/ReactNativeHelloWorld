import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { Toolbar, Avatar, Divider } from 'react-native-material-ui';

export default class HomeScene extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [
        { name: "Matthew", link: "https://bible.com/1/mat.1" },
        { name: "Mark", link: "https://bible.com/1/mrk.1" },
        { name: "Luke", link: "https://bible.com/1/luk.1" },
        { name: "John", link: "https://bible.com/1/jhn.1" }
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
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        });
        return (
            <View style={styles.header}>
              <Toolbar
                leftElement="menu"
                centerElement="Missoes"
                searchable={{
                  autoFocus: true,
                  placeholder: 'Search',
                }}
              />

              <Avatar icon="room" iconColor="blue" />
              
              <Divider />
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
