import {
    MY_CIRCLE,
    MY_CIRCLE_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/my_circle'
import { logger } from '../../utils/logger'

const state = {
	circle_list: [],
    option: {
        refresh: false,
        cursor: 1
    }
}

const mutations = {

    [MY_CIRCLE](state, data) {
        //save in state
        state.circle_list = data
        state.option.cursor++
        logger('my_circle', 'save store succeed !')
    },

    [MY_CIRCLE_REFRESH](state, refresh) {
        if(refresh){
            state.option.cursor = 1
        }
        state.option.refresh = refresh
        logger('my_circle', refresh)
    }


}

const actions = {

    getMyCircle: ({ commit } , cursor) => {

        console.log('getMyCircle');

        if (cursor == 0){
            commit(MY_CIRCLE_REFRESH, true)
        } else{
            commit(MY_CIRCLE_REFRESH, false)
        }

        api.getMyCircle(
            response => {
                commit(MY_CIRCLE, response.circlelist)
                commit(MY_CIRCLE_REFRESH, false)
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
