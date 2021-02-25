import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoriteScreen = ({navigation}) => {
  const favData = MEALS.filter((item) => item.id === 'm1' || item.id === 'm2');
  return <MealList listData={favData} navigation={navigation} />;
};
FavoriteScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

export default FavoriteScreen;
