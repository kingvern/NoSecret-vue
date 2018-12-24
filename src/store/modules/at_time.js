import {
    AT_TIME,
    AT_TIME_REFRESH
} from '../mutations-type'

// import * as chain from '../../contracts/chain'

import * as artifact from '../../contracts/NoSecret'

import * as api from '../../api/impl/at_time'
import { logger } from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [AT_TIME](state, data) {
        //save in state
        state.statuses = data
        state.option.page++
        logger('at_time', 'save store succeed !')
    },

    [AT_TIME_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('at_time', refresh)
    }


}

const actions = {

	getAtTime: ({ commit }, page) => {

		let tronWeb = window.tronWeb;
		console.log('address', tronWeb.defaultAddress.base58)
		let address = tronWeb.address.fromHex(artifact.networks['*'].address);
		console.log(artifact.abi, artifact.networks['*'].address, address)
		const contract = tronWeb.contract(artifact.abi, address);
		console.log(contract)

        console.log('getAtTime');

        if (page == 1){
            commit(AT_TIME_REFRESH, true)
        } else{
            commit(AT_TIME_REFRESH, false)
        }

        api.getAtTime(
            page,
            response => {
            	console.log('getAtTime response',response)
                commit(AT_TIME, response.statuses)
                commit(AT_TIME_REFRESH, false)
            },
            err => {
                console.log(err);
            }
        )
    }
}

export default {
    state,
    actions,
    mutations
}
