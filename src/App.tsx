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
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Menu from './components/uis/Menu/Menu';
import Home from './pages/Home/Home';
import ListProduct from './pages/ListProduct/ListProduct';
import {loadProducts} from './store/produits.slice';
import {store} from './store/store';
import IProduit from './interfaces/IProduits';

function App(props: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  useEffect(() => {
    fetch('http://localhost:7956/products/')
      .then(retour => {
        return retour.json();
      })
      .then(arr => {
        console.log(loadProducts(arr));
        //store.dispatch({type: loadProducts, payload: arr});
        props.loadProducts(arr);
      });
  }, []);
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        {/* <Home produits={produits} /> */}
        <ScrollView style={styles.page}>
          <ListProduct produits={props.produits} />
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

export const StoreConnectedApp = (props: any) => {
  const produits = useSelector((state: any) => state.produits);
  const dispatch = useDispatch();
  return (
    <App
      {...props}
      produits={produits}
      loadProducts={(arr: Array<IProduit>) => {
        dispatch(loadProducts(arr));
      }}
    />
  );
};
export default App;
