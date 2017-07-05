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
    constructor() {
        super();
        this._onPressBack = () => {
            this.props.onNavigateBack();
        };
        this.state = {
            users: 0,
            vehicles: 0,
            messages: 0
        };
    }
    componentDidMount(storage) {
        //console.log(storage.getItem('userEmail'));
        //storage.getItem('Authorization');
        //alert(storage.getItem('userEmail'));
    }
    render() {
        return (RX.createElement(RX.View, { style: styles.tabStyle },
            RX.createElement(RX.Text, { style: styles.contentStyle }, "Tab 1")));
    }
}
module.exports = Home;
//# sourceMappingURL=Home.js.map