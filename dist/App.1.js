/*
* This file demonstrates a basic ReactXP app.
*/
"use strict";
const RX = require("reactxp");
const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue'
    })
};
class App extends RX.Component {
    constructor() {
        super();
        this._translationValue = new RX.Animated.Value(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }
    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        });
        animation.start();
    }
    render() {
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(RX.Animated.Text, { style: [styles.helloWorld, this._animatedStyle] }, "Hello World"),
            RX.createElement(RX.Text, { style: styles.welcome }, "Welcome to ReactXP"),
            RX.createElement(RX.Text, { style: styles.instructions }, "Edit App.tsx to get started"),
            RX.createElement(RX.Link, { style: styles.docLink, url: 'https://microsoft.github.io/reactxp/docs' }, "View ReactXP documentation")));
    }
}
module.exports = App;
//# sourceMappingURL=App.1.js.map