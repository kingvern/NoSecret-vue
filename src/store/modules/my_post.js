import {
    MY_POST,
    MY_POST_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/my_post'
import { logger } from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MY_POST](state, data) {
        //save in state
        state.statuses = data
        state.option.page++
        logger('my_post', 'save store succeed !')
    },

    [MY_POST_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('my_post', refresh)
    }


}

const actions = {

    getMyPost: ({ commit }, page) => {

        console.log('getMyPost');

        if (page == 1){
            commit(MY_POST_REFRESH, true)
        } else{
            commit(MY_POST_REFRESH, false)
        }

        api.getMyPost(
            page,
            response => {
                commit(MY_POST, response.statuses)
                commit(MY_POST_REFRESH, false)
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
