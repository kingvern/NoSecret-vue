import axios from 'axios';
import { HOST_CONFIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'
import * as data from '../../assets/debug-data/getData'

export const getAtHot = (page, okCallback, errorCallback) => {

    if (DEBUG) {
        setTimeout(function () {
        	console.log('athot',data.athot)
            okCallback(data.athot)
        }, 1500)
        return
    }

    const accesstoken = store.getters.token.access_token

    var request_data = {
		address:"address3",
		page:"0",
		count:"10"
    }

    var config = {
        method: 'post',
        url: API_ROUTER_CONFIG.at_hot,
        baseURL: HOST_CONFIG.host,
		data: request_data,
        headers: {
            'Content-Type': 'application/json',
			'Accept':'application/json',
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Credentials':'true',
        }
    }


    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getAtTime response succeed')
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}


export const getMyPost = (page, okCallback, errorCallback) => {

	if (DEBUG) {
		setTimeout(function () {
			console.log('MyPost',data.athot)
			okCallback(data.athot)
		}, 1500)
		return
	}

	const address = store.getters.tron.address

	var request_data = {
		// access_token: accesstoken,
		// count: 30,
		// page: page
		address:"address3",
		page:"0",
		count:HOST_CONFIG.count
	}

	var config = {
		method: 'post',
		url: API_ROUTER_CONFIG.my_post,
		baseURL: HOST_CONFIG.host,
		data: request_data,
		headers: {
			'Content-Type': 'application/json',
			'Accept':'application/json',
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Credentials':'true',
		}
	}


	axios(config)
		.then(function (response) {
			logger("oauthPost-ok", 'getAtTime response succeed')
			okCallback(response.data)
		})
		.catch(function (error) {
			console.log(error);
			errorCallback(error)
		})
}
