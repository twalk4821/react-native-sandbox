import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Component } from './App';

interface Props {
  component: Component,
  onBackPressed: () => void
}
const Sandbox = (props: Props) => {
  const { component, onBackPressed } = props;

  return (
    <View style={styles.container}>
      {component.component}
      <Button title={"Back"} onPress={onBackPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  back: {

  }
});

export default Sandbox;