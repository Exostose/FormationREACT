import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';
import ProduitThumbnail from '../../components/uis/ProduitThumbnail/ProduitThumbnail';

/**
 * ListProduct component
 * @param {object} props ListProduct props of component
 * @returns render of ListProduct component
 */
const ListProduct = props => {
  return (
    <View style={styles.ListProduct}>
      <Text>Liste des produits disponible</Text>
      <ScrollView style={styles.ListProduct}>
        {props.produits.map((p, i) => (
          <ProduitThumbnail produit={p} key={`p${i}`} />
        ))}
      </ScrollView>
    </View>
  );
};

ListProduct.propTypes = {produits: PropTypes.array.isRequired};
ListProduct.defaultProps = {};

export default ListProduct;
