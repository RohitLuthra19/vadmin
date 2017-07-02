"use strict";
const Router = require("reactxp-navigation");
const { DrawerNavigator, StackNavigator, TabNavigator } = Router;
const Login = require("./Login");
const Home = require("./Home");
const Main = StackNavigator({
    Login: { screen: Login, navigationOptions: { title: "Login" } },
    Home: { screen: Home, navigationOptions: { title: "Home" } }
});
//# sourceMappingURL=App.js.map