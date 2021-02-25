import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitl from '../components/CategoryGridTitl';

const CategoriesScreen = ({navigation}) => {
  const renderGridData = ({item}) => {
    return (
      <CategoryGridTitl
        color={item.color}
        title={item.title}
        onHandler={() =>
          navigation.navigate({
            routeName: 'CategoryMeal',
            params: {
              categoryId: item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridData}
    />
  );
};

export default CategoriesScreen;
