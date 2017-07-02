"use strict";
const RX = require("reactxp");
const VehicollateClient_1 = require("./VehicollateClient");
const logoSrc = require('./../assets/vehicollateicon.png');
const bgSrc = require('./../assets/bg.png');
const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    title: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12,
        alignSelf: 'center'
    }),
    link: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        alignSelf: 'center'
    }),
    scrollView: RX.Styles.createScrollViewStyle({
        backgroundColor: '#eeeeee',
        padding: 15,
        flexDirection: 'column',
    }),
    mainWrapper: RX.Styles.createViewStyle({
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    }),
    iconImage: RX.Styles.createImageStyle({
        alignSelf: 'center',
        width: 70,
        height: 70,
        margin: 35
    }),
    textInput: RX.Styles.createTextInputStyle({
        height: 20,
        fontSize: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
    }),
    loginButton: RX.Styles.createButtonStyle({
        marginTop: 10,
        backgroundColor: '#00bcd4',
        borderRadius: 10,
        padding: 7,
        alignItems: 'center'
    }),
    loginButtonText: RX.Styles.createTextStyle({
        color: 'white',
        fontSize: 15
    }),
    textInputWrapper: RX.Styles.createViewStyle({
        borderRadius: 10,
        borderColor: '#00bcd4',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 2
    }),
};
class User {
    constructor(userEmail, password) {
        this.userEmail = userEmail;
        this.password = password;
    }
}
class Login extends RX.Component {
    constructor(props) {
        super(props);
        this._onChangeEmailAddress = (newEmail) => {
            this.setState({ userEmail: newEmail });
        };
        this.state = {};
    }
    componentDidMount() {
    }
    onLoginPressed(storage) {
        const user = new User(this.state.userEmail, this.state.password);
        VehicollateClient_1.default.login(user).then(success => {
            alert(success.message);
            storage.setItem('userEmail', success.userInfo.userEmail);
            storage.setItem('Authorization', success.token);
        }).catch(error => {
            alert('Error in login');
        });
    }
    render() {
        return (RX.createElement(RX.ScrollView, { style: styles.scrollView },
            RX.createElement(RX.View, { style: styles.mainWrapper },
                RX.createElement(RX.Text, { style: styles.title }, "Vehicollate Admin"),
                RX.createElement(RX.Image, { style: styles.iconImage, source: logoSrc }),
                RX.createElement(RX.View, { style: styles.textInputWrapper },
                    RX.createElement(RX.TextInput, { autoFocus: true, value: this.state.userEmail, style: styles.textInput, placeholder: 'Email Address', keyboardType: 'email-address', onChangeText: this._onChangeEmailAddress })),
                RX.createElement(RX.View, { style: styles.textInputWrapper },
                    RX.createElement(RX.TextInput, { ref: "password", secureTextEntry: true, value: this.state.password, style: styles.textInput, placeholder: 'Password', onChangeText: password => this.setState({ password }) })),
                RX.createElement(RX.Button, { title: "Login", style: styles.loginButton, onPress: this.onLoginPressed.bind(this) },
                    RX.createElement(RX.Text, { style: styles.loginButtonText }, "LOGIN")),
                RX.createElement(RX.Link, { style: [styles.link, { paddingTop: 20 }], url: 'http://vehicollate.in' }, "vehicollate.in"))));
    }
}
module.exports = Login;
//# sourceMappingURL=Home.js.map