import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

export default class WebsiteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bg.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Mental Health App</Text>{' '}
          </View>
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL('https://www.tonyrobbins.com/');
              }}>
              <Text style={styles.buttonText}> Website 1 </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL('https://www.lifehack.org/');
              }}>
              <Text style={styles.buttonText}> Website 2 </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL('https://www.keepinspiring.me/');
              }}>
              <Text style={styles.buttonText}> Website 3 </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    marginBottom: 50,
    width: '50%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    alignContent: 'center',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 8,
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});
