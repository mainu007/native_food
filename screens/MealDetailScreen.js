import React from 'react';
import {View, Text, StyleSheet, Alert, Image, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const MealDetailScreen = ({navigation}) => {
  const a = 10;
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const ListItem = ({value}) => {
    return (
      <View key={value} style={styles.listItem}>
        <DefaultText>{value}</DefaultText>
      </View>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem value={ingredient} />
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem value={step} />
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('mealTitle');
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="staro"
          title="Favorite"
          onPress={() => Alert.alert('Note', 'Coming soon!')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
});

export default MealDetailScreen;
