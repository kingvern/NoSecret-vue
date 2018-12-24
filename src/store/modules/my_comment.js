import {
    MY_COMMENT,
    MY_COMMENT_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/my_comment'
import { logger } from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MY_COMMENT](state, data) {
        //save in state
        state.statuses = data
        state.option.page++
        logger('my_comment', 'save store succeed !')
    },

    [MY_COMMENT_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('my_comment', refresh)
    }


}

const actions = {

    getMyComment: ({ commit }, page) => {

        console.log('getMyComment');

        if (page == 1){
            commit(MY_COMMENT_REFRESH, true)
        } else{
            commit(MY_COMMENT_REFRESH, false)
        }

        api.getMyComment(
            page,
            response => {
                commit(MY_COMMENT, response.statuses)
                commit(MY_COMMENT_REFRESH, false)
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
