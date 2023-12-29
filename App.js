import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  SearchScreen: SearchScreen
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: "Hungry?"
  }
});


export default createAppContainer(navigator)