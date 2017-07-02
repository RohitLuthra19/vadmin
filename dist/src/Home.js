"use strict";
const RX = require("reactxp");
const styles = {
    tabStyle: RX.Styles.createViewStyle({
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    contentStyle: RX.Styles.createTextStyle({
        color: 'purple',
        width: 200,
        textAlign: 'center'
    })
};
class Home extends RX.Component {
    componentDidMount(storage) {
        console.log(storage.getItem('userEmail'));
        //storage.getItem('Authorization');
    }
    render() {
        return (RX.createElement(RX.View, { style: styles.tabStyle },
            RX.createElement(RX.Text, { style: styles.contentStyle }, "Tab 1")));
    }
}
module.exports = Home;
//# sourceMappingURL=Home.js.map