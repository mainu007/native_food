import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      color={Platform.OS === 'android' ? '#fff' : Colors.primary}
      IconComponent={MaterialIcons}
      iconSize={23}
    />
  );
};

export default MenuHeaderButton;
