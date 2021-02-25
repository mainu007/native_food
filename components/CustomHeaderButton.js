import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      color={Platform.OS === 'android' ? '#fff' : Colors.primary}
      iconSize={23}
    />
  );
};

export default CustomHeaderButton;
