import RX = require('reactxp');
import VehicollateStyles = require('./VehicollateStyles');
import VehicollateClient from './VehicollateClient';
import SyncTasks = require('synctasks');
import Home = require('./Home');

const logoSrc = require('./../assets/vehicollateicon.png');
const bgSrc= require('./../assets/bg.png');


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
        color : 'white',
        fontSize: 15
    }),
    textInputWrapper: RX.Styles.createViewStyle({
        borderRadius: 10,
        borderColor: '#00bcd4',
        borderStyle: 'solid',
        borderWidth:  1,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 2
    }),
};

interface LoginState {
    userEmail?: string,
    password?: string,
    show?: boolean
}

class User {
  constructor(public userEmail: string,public password: string) { }
}

interface LoginProps {
    navigation:{navigate: (scene:String) => void};
}

class Login extends RX.Component<LoginProps, LoginState> {

    constructor(props : any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }

    private _onChangeEmailAddress = (newEmail: string) => {
        this.setState({ userEmail: newEmail });
    }

    onLoginPressed(storage: Storage){
        //const { navigate } = this.props.navigation;
        const user = new User(this.state.userEmail, this.state.password);
        VehicollateClient.login(user).then(success => {
            alert(success.message);
            //storage.setItem('userEmail', success.userInfo.userEmail);
            //storage.setItem('Authorization', success.token);
            //this.props.navigation.navigate("Home");
        }).catch(error => {
            alert('Error in login');
        });
    }

    render(): JSX.Element | null {
        return (
            <RX.ScrollView style={ styles.scrollView } >
                <RX.View style={ styles.mainWrapper }>
                    <RX.Text style={ styles.title }>
                        Vehicollate Admin
                    </RX.Text>
                    <RX.Image style={styles.iconImage} source={logoSrc} />
                    <RX.View style={ styles.textInputWrapper } >
                        <RX.TextInput
                            autoFocus={true}
                            value={this.state.userEmail}
                            style={styles.textInput}
                            placeholder='Email Address'
                            keyboardType= 'email-address'
                            onChangeText={ this._onChangeEmailAddress }
                        />
                    </RX.View>
                    <RX.View style={ styles.textInputWrapper }>
                        <RX.TextInput
                            ref="password"
                            secureTextEntry={true}
                            value={this.state.password}
                            style={styles.textInput}
                            placeholder='Password'
                            onChangeText={password => this.setState({password})}
                        />
                    </RX.View>
                    <RX.Button 
                        title="Login"
                        style={ styles.loginButton }
                        onPress={this.onLoginPressed.bind(this)}>
                        <RX.Text style={ styles.loginButtonText }>LOGIN</RX.Text>
                    </RX.Button>
                    
                    <RX.Link style={ [styles.link, {paddingTop: 20 }] } url={ 'http://vehicollate.in' }>
                        vehicollate.in
                    </RX.Link>
                </RX.View>
            </RX.ScrollView>
        );
    }
}

export = Login;
