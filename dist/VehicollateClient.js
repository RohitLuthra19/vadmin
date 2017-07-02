"use strict";
const simplerestclients_1 = require("simplerestclients");
const vehicollateApiUrl = 'https://dev-services.vehicollate.in/api/';
class VehicollateClient extends simplerestclients_1.GenericRestClient {
    // Define public methods that expose the APIs provided through the REST service.
    login(user) {
        return this.performApiPost('admin/login', user);
    }
}
exports.VehicollateClient = VehicollateClient;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new VehicollateClient(vehicollateApiUrl);
//# sourceMappingURL=VehicollateClient.js.map