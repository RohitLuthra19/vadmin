import RX = require('reactxp');
import { GenericRestClient } from 'simplerestclients';
import SyncTasks = require('synctasks');

const vehicollateApiUrl = 'https://dev-services.vehicollate.in/api/';

interface User {
    userEmail: string;
    password: string;
}

interface LoginResponse {
    success: boolean,
    message: string,
    userInfo : {
        _id: Object,
        name: string,
        userEmail: string
    },
    token: string
}

export class VehicollateClient extends GenericRestClient {

    // Define public methods that expose the APIs provided through the REST service.
    login(user: User): SyncTasks.Promise<LoginResponse> {
        return this.performApiPost<LoginResponse>('admin/login', user)
    }
}


export default new VehicollateClient(vehicollateApiUrl);