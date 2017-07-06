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
            userEmail: null,
            users: 0,
            vehicles: 0,
            messages: 0
        };
    }
    componentDidMount() {
        //console.log(storage.getItem('userEmail'));
        //storage.getItem('Authorization');
        RX.Storage.getItem('userEmail').then(success => {
            this.setState({
                userEmail: success
            });
        });
    }
    render() {
        return (RX.createElement(RX.View, { style: styles.tabStyle },
            RX.createElement(RX.Text, { style: styles.contentStyle }, this.state.userEmail)));
    }
}
module.exports = Home;
//# sourceMappingURL=Home.js.map