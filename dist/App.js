"use strict";
const RX = require("reactxp");
const MainPanel = require("./Login");
const SecondPanel = require("./Home");
var NavigationRouteId;
(function (NavigationRouteId) {
    NavigationRouteId[NavigationRouteId["MainPanel"] = 0] = "MainPanel";
    NavigationRouteId[NavigationRouteId["SecondPanel"] = 1] = "SecondPanel";
})(NavigationRouteId || (NavigationRouteId = {}));
const styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    })
};
class App extends RX.Component {
    constructor() {
        super(...arguments);
        this._onNavigatorRef = (navigator) => {
            this._navigator = navigator;
        };
        this._renderScene = (navigatorRoute) => {
            switch (navigatorRoute.routeId) {
                case NavigationRouteId.MainPanel:
                    return RX.createElement(MainPanel, { onPressNavigate: this._onPressNavigate });
                case NavigationRouteId.SecondPanel:
                    return RX.createElement(SecondPanel, { onNavigateBack: this._onPressBack });
            }
            return null;
        };
        this._onPressNavigate = () => {
            this._navigator.push({
                routeId: NavigationRouteId.SecondPanel,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
                customSceneConfig: {
                    hideShadow: true
                }
            });
        };
        this._onPressBack = () => {
            this._navigator.pop();
        };
    }
    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
                routeId: NavigationRouteId.MainPanel,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
            }]);
    }
    render() {
        return (RX.createElement(RX.Navigator, { ref: this._onNavigatorRef, renderScene: this._renderScene, cardStyle: styles.navCardStyle }));
    }
}
module.exports = App;
//# sourceMappingURL=App.js.map