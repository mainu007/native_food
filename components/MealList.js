import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({listData, navigation}) => {
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
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
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

export default MealList;
