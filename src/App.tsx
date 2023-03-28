/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log('============================');
    console.log('Nouvelle valeur de counter : ', counter);
    console.log('============================');
  }, [counter]);
  useEffect(() => {
    console.log('montage');
    return () => {
      console.log('demontage');
    };
  }, []);
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
          setcounter(counter - 1);
        }}>
        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/city-flat-2/512/tree_element_nature_plant_garden_bush-1024.png',
          }}
          style={{width: 64, height: 64}}
        />
        <Text style={{...styles.displayCounterText, ...styles.big}}>
          Soustraire
        </Text>
      </Button>
      <Button
        onPress={() => {
          setcounter(counter + 1);
        }}>
        <Text style={{...styles.displayCounterText, ...styles.big}}>
          Ajouter
        </Text>
      </Button>
      {/* <Button children="Button3" /> */}
      <NButton title="Hello World"></NButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCounterText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  big: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default App;
