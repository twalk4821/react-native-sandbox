import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import Sandbox from './Sandbox';

export interface Component {
  name: string;
  component: React.ReactNode;
}

/**
 * Note: DO NOT MODIFY THIS COMMENT AS IT IS USED AS A LINE NUMBER MARKER
/* COMPONENT IMPORTS */
import Piano from './components/Piano/';
import Earth from './components/Earth';
import Wind from './components/Wind';
import Water from './components/Water';
import Fire from './components/Fire';
/**
 * Note: DO NOT MODIFY THIS COMMENT AS IT IS USED AS A LINE NUMBER MARKER
/* COMPONENT LIST */
const components: Component[] = [
  { component: <Piano />, name: "Piano"},
  { component: <Earth />, name: "Earth"},
  { component: <Wind />, name: "Wind"},
  { component: <Water />, name: "Water"},
  { component: <Fire />, name: "Fire"},
];

const App = () => {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(-1);

  const selectComponent = (component: Component) => {
    setSelectedComponentIndex(components.indexOf(component));
  };

  const onBackPressed = () => {
    setSelectedComponentIndex(-1);
  }

  const renderComponentSandbox = (component: Component) => {
    return (
      <SafeAreaView style={styles.container}>
        <Sandbox component={component} onBackPressed={onBackPressed} />
      </SafeAreaView>
    )
  }

  const menu = (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Components</Text>
        { components.length == 0 &&
        <View>
          <Text>No Components!</Text>
          <Text>Use the generate command to make one!</Text>
        </View>
        }
        <ScrollView>
          { components.map((c) =>
            <Button title={c.name} onPress={e => selectComponent(c)} key={c.name} />
          )}
        </ScrollView>

      </SafeAreaView>
    </>
  );

  if (selectedComponentIndex == -1) {
    return menu;
  } else {
    return renderComponentSandbox(components[selectedComponentIndex])
  }
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline"
  },
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
