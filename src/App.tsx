import RX = require('reactxp');
import Router = require('./../node_modules/reactxp-navigation'); 
const{ DrawerNavigator, StackNavigator, TabNavigator } = Router;

import Login = require('./Login');
import Home = require('./Home');

const App = StackNavigator({
  Login: {screen: Login, navigationOptions:{header: null}},
  Home: {screen: Home, navigationOptions:{header: null}}
});

export = App;