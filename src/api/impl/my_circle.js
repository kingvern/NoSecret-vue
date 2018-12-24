import axios from 'axios';
import { HOST_CONFIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'
import * as data from '../../assets/debug-data/getData'

export const getMyCircle = (okCallback, errorCallback) => {

     if (!DEBUG) {
        setTimeout(function () {
            okCallback(data.myfriends)
        }, 1500)
        return
    }

    const accesstoken = store.getters.token.access_token
    const uid = store.getters.token.uid

    var request_data = {
        access_token: accesstoken,
        uid: uid
    }

    var config = {
        method: 'post',
        url: API_ROUTER_CONFIG.get_my_circle,
        baseURL: HOST_CONFIG.host,
        data: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getMyCircle response succeed')
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}
