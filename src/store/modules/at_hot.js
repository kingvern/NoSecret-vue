import {
    AT_HOT,
    AT_HOT_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/at_hot'
import { logger } from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [AT_HOT](state, data) {
        //save in state
        state.statuses = data
        state.option.page++
        logger('at_hot', 'save store succeed !')
    },

    [AT_HOT_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('at_hot', refresh)
    }


}

const actions = {

	getAtHot: ({ commit }, page) => {

        console.log('getAtHot');

        if (page == 1){
            commit(AT_HOT_REFRESH, true)
        } else{
            commit(AT_HOT_REFRESH, false)
        }

        api.getAtHot(
            page,
            response => {
            	console.log('getAtHot response',response)
                commit(AT_HOT, response.statuses)
                commit(AT_HOT_REFRESH, false)
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
