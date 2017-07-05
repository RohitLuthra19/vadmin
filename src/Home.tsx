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
    users?: number,
    vehicles?: number,
    messages?: number
}

class Home extends RX.Component<HomeProps, HomeState> {
    private _navigator: RX.Navigator;

    constructor() {
        super();

        this.state = {
            users: 0,
            vehicles: 0,
            messages: 0
        };
    }

    componentDidMount(storage: Storage) {
        //console.log(storage.getItem('userEmail'));
        //storage.getItem('Authorization');
        //alert(storage.getItem('userEmail'));
    }

    private _onPressBack = () => {
        this.props.onNavigateBack();
    }

    render() {
        return(
            <RX.View style={styles.tabStyle}>
                <RX.Text  style={styles.contentStyle}>
                Tab 1
                </RX.Text>
            </RX.View>
        )
    }
}

export = Home;
