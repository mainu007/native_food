import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');

  //filter meal
  const MEALS = useSelector((state) => state.meals.filtered);
  const displayedMeal = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList listData={displayedMeal} navigation={navigation} />;
};
CategoryMealScreen.navigationOptions = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');
  const selected = CATEGORIES.find((item) => item.id === categoryId);
  return {
    headerTitle: selected.title,
  };
};

export default CategoryMealScreen;
