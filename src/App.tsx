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
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Menu from './components/uis/Menu/Menu';
import Home from './pages/Home/Home';
import ListProduct from './pages/ListProduct/ListProduct';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    fetch('http://localhost:7956/products/')
      .then(retour => {
        return retour.json();
      })
      .then(arr => setProduits(arr));
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        {/* <Home produits={produits} /> */}
        <ScrollView style={styles.page}>
          <ListProduct produits={produits} />
        </ScrollView>
        <Menu />
      </MainLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
});

export default App;
