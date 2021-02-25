import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTitl = ({title, onHandler, color}) => {
  let TouchableCom = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCom = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCom onPress={onHandler}>
        <View style={{backgroundColor: color, ...styles.container}}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableCom>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 15,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGridTitl;
