import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform} from 'react-native';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
    },
  },
);

const tabNavigatorConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons
            name="restaurant"
            color={tabInfo.tintColor}
            size={25}
          />
        );
      },
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabNavigatorConfig, {
        activeColor: '#fff',
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabNavigatorConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

export default createAppContainer(MealTabNavigator);
