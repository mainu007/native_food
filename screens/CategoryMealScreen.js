import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');
  const selected = CATEGORIES.find((item) => item.id === categoryId);

  //filter meal
  const displayedMeal = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0,
  );
  const renderMealItem = ({item}) => {
    const onSelectItem = () => {
      navigation.navigate({
        routeName: 'MealDetail',
        params: {
          mealId: item.id,
        },
      });
    };
    return <MealItem {...item} onSelectItem={onSelectItem} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
CategoryMealScreen.navigationOptions = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');
  const selected = CATEGORIES.find((item) => item.id === categoryId);
  return {
    headerTitle: selected.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default CategoryMealScreen;
