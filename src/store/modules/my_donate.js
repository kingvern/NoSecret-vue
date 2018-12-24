import {
    MY_DONATE,
    MY_DONATE_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/my_donate'
import { logger } from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MY_DONATE](state, data) {
        //save in state
        state.statuses = data
        state.option.page++
        logger('my_comment', 'save store succeed !')
    },

    [MY_DONATE_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('my_comment', refresh)
    }


}

const actions = {

    getMyDonate: ({ commit }, page) => {

        console.log('my_comment');

        if (page == 1){
            commit(MY_DONATE_REFRESH, true)
        } else{
            commit(MY_DONATE_REFRESH, false)
        }

        api.getMyDonate(
            page,
            response => {
                commit(MY_DONATE, response.statuses)
                commit(MY_DONATE_REFRESH, false)
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
