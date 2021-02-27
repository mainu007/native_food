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
import {createDrawerNavigator} from 'react-navigation-drawer';
import FilterScreen from '../screens/FilterScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import MenuHeaderButton from '../components/MenuHeaderButton';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
};

//Header menu button
const HeaderMenuButton = ({navigation}) => (
  <HeaderButtons HeaderButtonComponent={MenuHeaderButton}>
    <Item
      title="Menu"
      iconName="menu"
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>
);

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Meal Categories',
          headerLeft: <HeaderMenuButton navigation={navigation} />,
        };
      },
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
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
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealFavNavigator =
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

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FilterScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Filters',
          headerLeft: <HeaderMenuButton navigation={navigation} />,
        };
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const MainNavigator = createDrawerNavigator({
  MealFavorites: MealFavNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
