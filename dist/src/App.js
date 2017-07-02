"use strict";
const Router = require("./../node_modules/reactxp-navigation");
const { DrawerNavigator, StackNavigator, TabNavigator } = Router;
const Login = require("./Login");
const Home = require("./Home");
const App = StackNavigator({
    Login: { screen: Login, navigationOptions: { header: null } },
    Home: { screen: Home, navigationOptions: { header: null } }
});
module.exports = App;
//# sourceMappingURL=App.js.map