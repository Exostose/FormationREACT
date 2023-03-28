import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Product.styles';
/**
 * initial value of productState
 */
const productInitialStateValue = '';
/**
 * Product component
 * @param {object} props Product props of component
 * @returns render of Product component
 */
const Product = props => {
  const [productState, setProductState] = useState(
    productInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de productState');
  }, [productState]);
  useEffect(() => {
    console.log('mount de de product');
    return () => {
      console.log('unmount de de product');
    };
  }, []);
  return (
    <View style={styles.Product}>
      <Text>product</Text>
    </View>
  );
};

Product.propTypes = {};
Product.defaultProps = {};

export default Product;
