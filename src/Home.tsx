import RX = require('reactxp');

const styles = {
    tabStyle: RX.Styles.createViewStyle({
        backgroundColor: '#fff',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    contentStyle: RX.Styles.createTextStyle({
        color: 'purple',
        width:200,
        textAlign:'center'
    })
};

interface HomeProps {
    onNavigateBack: () => void;
}

interface HomeState {
    userEmail?: string,
    users?: number,
    vehicles?: number,
    messages?: number
}

class Home extends RX.Component<HomeProps, HomeState> {
    private _navigator: RX.Navigator;

    constructor() {
        super();

        this.state = {
            userEmail : null,
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

    private _onPressBack = () => {
        this.props.onNavigateBack();
    }

    render() {
        return(
            <RX.View style={styles.tabStyle}>
                <RX.Text  style={styles.contentStyle}>
                {this.state.userEmail}
                </RX.Text>
            </RX.View>
        )
    }
}

export = Home;
