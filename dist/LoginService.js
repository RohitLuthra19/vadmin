"use strict";
const simplerestclients_1 = require("simplerestclients");
const vehicollateApiUrl = 'https://dev-services.vehicollate.in/api/';
class VehicollateClient extends simplerestclients_1.GenericRestClient {
    constructor(contentType) {
        this.contentType = contentType;
        contentType = 'application/x-www-form-urlencoded; charset=utf-8';
        super(vehicollateApiUrl);
    }
    // Override _getHeaders to append a custom header with the app ID.
    _getHeaders(options) {
        let headers = super._getHeaders(options);
        headers['Content-Type'] = this.contentType;
        return headers;
    }
    // Define public methods that expose the APIs provided through the REST service.
    login(user) {
        return this.performApiPost('login', User);
    }
}
//export default new VehicollateClient(vehicollateApiUrl); 
//# sourceMappingURL=LoginService.js.map