import {
	INIT_TRON,
	CHECK_USER,
	WRITE_HASH,
	SET_USER,
	SET_CREATE_FEE
} from '../mutations-type'

import {logger} from '../../utils/logger'

const state = {
	address: '',
	contract: {},
	checkUserRes: false,
	writeHash: '',
	user:{},
	createfee:''

}

const mutations = {

	[INIT_TRON](state, data) {
		//save in state
		state.address = data.address
		state.contract = data.contract
		logger('INIT_TRON', 'save store succeed !')
	},
	[CHECK_USER](state, data) {
		//save in state
		state.checkUserRes = data
		logger('CHECK_USER', 'save store succeed !')
	},
	[WRITE_HASH](state, data) {
		//save in state
		state.writeHash = data
		logger('WRITE_HASH', 'save store succeed !')
	},
	[SET_USER](state, data) {
		//save in state
		state.user = data
		logger('SET_USER', 'save store succeed !')
	},
	[SET_CREATE_FEE](state, data) {
		//save in state
		state.createfee = data
		logger('SET_CREATE_FEE', 'save store succeed !')
	},


}

const actions = {

	initTron: ({commit}, obj) => {
		console.log('initTron');
		commit(INIT_TRON, obj)
	},
	checkUser: async ({commit}) => {
		let checkUser = await state.contract.checkUser().call()
		commit(CHECK_USER, checkUser)
	},
	createUser: async ({commit}, circle_join) => {
		let writeHash = await state.contract.createUser(circle_join).send()
		commit(WRITE_HASH, writeHash)
	},
	getCreatefee: async ({commit}) => {
		let createfee = await state.contract.getCreatefee().call()
		commit(SET_CREATE_FEE, createfee)
	},
	createCircle: async ({commit}, fee) => {
		let callfee = 1;
		let writeHash = await this.contract.createCircle(fee).send({
			feeLimit: 100000000,
			callValue: callfee,
			shouldPollResponse: true
		})
		commit(WRITE_HASH, writeHash)
	},
	joinCircle: async ({commit}, circle_keys) => {
		let callfee = 0;
		let writeHash = await this.contract.joinCircle(circle_keys).send({
			feeLimit: 10000000,
			callValue: callfee,
			shouldPollResponse: true
		})
		commit(WRITE_HASH, writeHash)
	},
	createMessage: async ({commit}, data) => {
		let circle_key = 1;
		let writeHash = await this.contract.createMessage(data.circle_key).send()
		commit(WRITE_HASH, writeHash)
	},
	payMessage: async ({commit}, data) => {
		let message_key = 1;
		let money = 1;
		let callfee = money * 100000000; ///100trx
		//await tronWeb.transactionBuilder.sendTrx("TXPHCzmAmjyERtWES6EXTYqUPfJfQSzp2m",1000);
		let writeHash = await this.contract.payMessage(message_key, callfee).send({
			feeLimit: 1000000000,
			callValue: callfee,
			shouldPollResponse: true
		})
		commit(WRITE_HASH, writeHash)
	},
	getCircle: async ({commit}, data) => {
		let circleInfo = await this.contract.getCircle(data).call()
	},
	getUser: async ({commit}) => {
		let userInfo = await this.contract.getUser().call()
		commit(SET_USER, userInfo)
	},
	getMessage: async ({commit}, data) => {
		let messageInfo = await this.contract.getMessage(data).call()
	},
}

export default {
	state,
	actions,
	mutations
}
