/**
* Styles.tsx
* Copyright: Vehicollate.in
*
* Shared styles used in the Vehicollate Admin application.
*/
"use strict";
const RX = require("reactxp");
class VehicollateStyles {
}
VehicollateStyles.color = {
    black: '#000000',
    black50: '#0000007F'
};
VehicollateStyles.controlColors = {
    defaultActionButtonColor: VehicollateStyles.color.black,
    saveActionButtonCollor: '#666',
    destroyActionButtonCollor: '#FF8C00',
    contentBackground: '#eee',
    headerBackground: '#cdd',
    placeholderText: '#ccc'
};
VehicollateStyles.buttonBorders = {
    radius: 6,
    margins: 16,
    margin: 8
};
VehicollateStyles.fontSizes = {
    size14: 14,
    size20: 20,
    size36: 36
};
VehicollateStyles.styles = {
    headerWithStatusBar: RX.Styles.createViewStyle({
        paddingTop: 22
    }),
    header: RX.Styles.createViewStyle({
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: VehicollateStyles.controlColors.headerBackground
    }),
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: VehicollateStyles.controlColors.contentBackground
    }),
    cancelButton: RX.Styles.createViewStyle({
        margin: VehicollateStyles.buttonBorders.margin,
        borderRadius: VehicollateStyles.buttonBorders.radius,
        backgroundColor: VehicollateStyles.controlColors.defaultActionButtonColor
    }),
    submitButton: RX.Styles.createViewStyle({
        margin: VehicollateStyles.buttonBorders.margin,
        borderRadius: VehicollateStyles.buttonBorders.radius,
        backgroundColor: VehicollateStyles.controlColors.saveActionButtonCollor
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: VehicollateStyles.fontSizes.size14,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    })
};
module.exports = VehicollateStyles;
//# sourceMappingURL=VehicollateStyles.js.map