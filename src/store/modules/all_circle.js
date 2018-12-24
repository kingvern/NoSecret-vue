import {
    ALL_CIRCLE,
    ALL_CIRCLE_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/all_circle'
import { logger } from '../../utils/logger'

const state = {
	circle_list: [],
    option: {
        refresh: false,
        cursor: 1
    }
}

const mutations = {

    [ALL_CIRCLE](state, data) {
        //save in state
        state.circle_list = data
        state.option.cursor++
        logger('all_circle', 'save store succeed !')
    },

    [ALL_CIRCLE_REFRESH](state, refresh) {
        if(refresh){
            state.option.cursor = 1
        }
        state.option.refresh = refresh
        logger('all_circle', refresh)
    }


}

const actions = {

    getAllCircle: ({ commit } , cursor) => {

        console.log('getAllCircle');

        if (cursor == 0){
            commit(ALL_CIRCLE_REFRESH, true)
        } else{
            commit(ALL_CIRCLE_REFRESH, false)
        }

        api.getAllCircle(
            response => {
            	console.log('response',response)
                commit(ALL_CIRCLE, response.circlelist)
                commit(ALL_CIRCLE_REFRESH, false)
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
