import axios from 'axios';
import { HOST_CONFIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'
import * as data from '../../assets/debug-data/getData'

export const getUserInfo = (userId, userName, okCallback, errorCallback) => {

    if (!DEBUG) {
        okCallback(data.userInfo)
        return
    }

    const accesstoken = store.getters.token.access_token
    var request_data = {
        access_token: accesstoken,
        uid: userId,
        screen_name: userName
    }

    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.userinfo,
        baseURL: HOST_CONFIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getUserInfo response succeed')
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}
