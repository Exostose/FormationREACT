/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Button as NButton,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };
  let counter = 0;
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.displayCounterText}>Valeur de mon compteur</Text>
        <Text style={{...styles.displayCounterText, ...styles.big}}>
          {counter}
        </Text>
      </View>
      <Button
        bgcolor="tomato"
        color="green"
        style={{borderRadius: 64}}
        onPress={() => {
          counter -= 1;
          console.log(counter);
        }}>
        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/city-flat-2/512/tree_element_nature_plant_garden_bush-1024.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Enlever</Text>
      </Button>
      <Button
        text="Ajouter"
        onPress={() => {
          counter += 1;
          console.log(counter);
        }}
      />
      {/* <Button children="Button3" /> */}
      <NButton title="Hello World"></NButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCounterText: {
    textAlign: 'center',
  },
  big: {
    fontSize: 18,
    fontweight: '900',
  },
});

export default App;
