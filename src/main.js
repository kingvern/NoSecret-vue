// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import PixelContent from './views/Content/index'
import PixelContentComments from './views/Comment/index'
import PixelAtMeComment from './views/AtMeComment/index'
import PixelSpinner from './views/Spinner/index'
import PixelUserInfo from './views/UserInfo/index'
import PixelCircleInfo from './views/CircleInfo/index'

import PixelItem from './views/Item/index'
import router from './router/router'
import store from './store/'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as artifact from "./contracts/NoSecret";

Vue.config.productionTip = false
/* eslint-disable no-new */

let waitForGlobal = async () => {
	// 1. check variable, 检查tronweb是否已经加载
	if (window.tronWeb) {
		let tronWeb = window.tronWeb;
		// 2. check node connection，检查所需要的API是否都可以连通
		const nodes = await tronWeb.isConnected();
		const connected = !Object.entries(nodes).map(([name, connected]) => {
			if (!connected) {
				console.error(`Error: ${name} is not connected`);
			}
			return connected;
		}).includes(false);
		if (connected) {
			// 3. 如果一切正常，启动react应用。


			// let tronWeb = window.tronWeb;
			// console.log('address', tronWeb.defaultAddress.base58)
			// let address = tronWeb.address.fromHex(artifact.networks['*'].address);
			// console.log(artifact.abi, artifact.networks['*'].address, address)
			// const contract = tronWeb.contract(artifact.abi, address);
			// console.log(contract)



			Vue.use(VueMaterial)
			Vue.use(PixelContent)
			Vue.use(PixelItem)
			Vue.use(PixelSpinner)
			Vue.use(PixelContentComments)
			Vue.use(PixelAtMeComment)
			Vue.use(PixelUserInfo)
			Vue.use(PixelCircleInfo)
			Vue.component('v-icon', Icon)

			new Vue({
				el: '#app',
				router,
				store,
				template: '<App/>',
				components: {
					App
				}
			})


		} else {
			console.error(`Error: TRON node is not connected`);
			console.error('wait for tronLink');
			setTimeout(async () => {
				await waitForGlobal();
			}, 100);
		}

	} else {
		// 如果检测到没有注入tronWeb对象，则等待100ms后重新检测
		console.error('wait for tronLink');
		setTimeout(async () => {
			await waitForGlobal();
		}, 1000);
	}
};

waitForGlobal();

// Vue.use(VueMaterial)
// Vue.use(PixelContent)
// Vue.use(PixelItem)
// Vue.use(PixelSpinner)
// Vue.use(PixelContentComments)
// Vue.use(PixelAtMeComment)
// Vue.use(PixelUserInfo)
// Vue.use(PixelCircleInfo)
// Vue.component('v-icon', Icon)
//
// new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	template: '<App/>',
// 	components: {
// 		App
// 	}
// })
