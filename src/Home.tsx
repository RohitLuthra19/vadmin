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

class Home extends RX.Component<null, null> {
    private _navigator: RX.Navigator;

    componentDidMount(storage: Storage) {
        console.log(storage.getItem('userEmail'));
        //storage.getItem('Authorization');
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
