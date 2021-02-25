import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const MealItem = ({
  onSelectItem,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectItem}>
        <View style={{...styles.itemRow, ...styles.header}}>
          <ImageBackground style={styles.bgImage} source={{uri: imageUrl}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{...styles.itemRow, ...styles.detail}}>
          <Text>{duration}</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
  },
  header: {
    height: '85%',
  },
  bgImage: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  detail: {
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default MealItem;
