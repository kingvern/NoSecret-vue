import axios from 'axios';
import { HOST_CONFIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'
import * as data from '../../assets/debug-data/getData'

import * as artifact from '../../contracts/NoSecret'

export const getHomeTimeline = (page, okCallback, errorCallback) => {

    if (DEBUG) {
        setTimeout(function () {
            okCallback(data.hometimeline)
        }, 1500)
        return
    }

    const accesstoken = store.getters.token.access_token

    var request_data = {
        access_token: accesstoken,
        count: 30,
        page: page
    }

    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.home_timeline,
        baseURL: HOST_CONFIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getHomeTimeline response succeed')
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}


export const getBalance = (page, okCallback, errorCallback) => {
	window.tronWeb.setDefaultBlock('latest');

	let tronWeb = window.tronWeb;
	console.log('address', tronWeb.defaultAddress.base58)
	let address = tronWeb.address.fromHex(artifact.networks['*'].address);
	console.log(artifact.abi, artifact.networks['*'].address, address)

}
