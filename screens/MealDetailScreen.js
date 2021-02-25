import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = ({navigation}) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('CategoryMeal')}
      />
    </View>
  );
};
MealDetailScreen.navigationOptions = ({navigation}) => {
  const mealId = navigation.getParam('mealId');
  const {title} = MEALS.find((item) => item.id === mealId);
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item iconName="staro" title="Favorite" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
