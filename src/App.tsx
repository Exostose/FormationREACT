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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button bgcolor="tomato" color="green" style={{borderRadius: 64}}>
        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/city-flat-2/512/tree_element_nature_plant_garden_bush-1024.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Cliquez ici</Text>
      </Button>
      <Button text="Button2" />
      <Button children="Button3" />
      <NButton title="Hello World"></NButton>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
