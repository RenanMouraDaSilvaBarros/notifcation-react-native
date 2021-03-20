/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { notificationLocal, notificationBackground, notificationCancel } from './src/notification.android'
import PushNotification from "react-native-push-notification";

import {

  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';






const App = () => {

  return (
    <View style={styles.container}>
      <Text>Push notification</Text>
      <TouchableOpacity style={styles.button} onPress={notificationLocal}>
        <View><Text style={styles.title}>push notification</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={notificationBackground}>
        <View><Text style={styles.title}>push notification after 5 second</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={notificationCancel}>
        <View><Text style={styles.title}>push notification  cancel</Text></View>
      </TouchableOpacity>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    margin: 15,
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 15
  },
  title: {
    color: 'white',
  }


});


