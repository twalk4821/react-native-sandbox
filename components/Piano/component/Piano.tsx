import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PickerPropsAndroid,
} from 'react-native';
import styles from '../style/Piano.style'

function Piano() {
  const [numKeys, setNumKeys] = useState(4);
  const items = new Array(numKeys).fill(0);

  return (
    <View style={styles.container}>
      { items.map(key => {
        return (<Text style={styles.key}>Key</Text>);
      }) }
    </View>
  );
}



export default Piano;