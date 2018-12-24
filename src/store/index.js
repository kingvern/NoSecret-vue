import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import userInfo from './modules/userInfo'
import home_timeline from './modules/home_timeline'
import public_timeline from './modules/public_timeline'
import my_content from './modules/my_content'
import image_zoom from './modules/image_zoom'
import detail_content from './modules/detail_content'
import content_comments from './modules/content_comments'
import at_me_status from './modules/at_me_status'
import at_me_comment from './modules/at_me_comment'
import receive_comment from './modules/receive_comment'
import send_comment from './modules/send_comment'
import my_follower from './modules/my_follower'
import my_friend from './modules/my_friend'
import at_time from './modules/at_time'
import at_hot from './modules/at_hot'
import my_post from './modules/my_post'
import my_comment from './modules/my_comment'
import my_donate from './modules/my_donate'
import my_circle from './modules/my_circle'
import all_circle from './modules/all_circle'

import tron from  './modules/tron'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules: {
        auth,
        userInfo,
        home_timeline,
        public_timeline,
        my_content,
        image_zoom,
        detail_content,
        content_comments,
        at_me_status,
        at_me_comment,

		tron,

		at_time,
		at_hot,
		my_post,
		my_comment,
		my_donate,
		my_circle,
		all_circle,

        receive_comment,
        send_comment,
        my_follower,
        my_friend
    }
})
