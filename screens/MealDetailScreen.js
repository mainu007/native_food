import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MealDetailScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal detail screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('CategoryMeal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
