import {View, Text, TouchableHighlight, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';
/**
 * initial value of menuState
 */
const menuInitialStateValue = '';
/**
 * Menu component
 * @param {object} props Menu props of component
 * @returns render of Menu component
 */
const Menu = props => {
  return (
    <View style={styles.Menu}>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/real-estate-140/64/22_house_real_estate_architecture_home_fence-1024.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/arrow-right-circle-1024.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
    </View>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
