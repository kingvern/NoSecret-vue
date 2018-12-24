import * as artifact from './NoSecret'

let tronWeb = window.tronWeb;
console.log('address', tronWeb.defaultAddress.base58)
let address = tronWeb.address.fromHex(artifact.networks['*'].address);
console.log(artifact.abi, artifact.networks['*'].address, address)
const contract = tronWeb.contract(artifact.abi, address);
console.log(contract)

//首次登录，注册用户
//判断是否首次登录
//true 表示已经注册，false表示第一次登录，需要注册
export const checkUser = async () => {
	let result_0 = await contract.checkUser().call()
	console.log(result_0)
	this.setState({checkUser:JSON.stringify(result_0)})
};


//仅第一次登录时使用
//创建用户，参数是一个数组[],里面的值是circle_key
export const createUser = async () => {
	let circle_join = [1,2];
	let result_0 = await contract.createUser(circle_join).send()
	console.log(result_0)
	this.setState({createUser:JSON.stringify(result_0)})
};

//测试用
export const getCircleKey = async () => {
	let result_0 = await contract.getCircleKey().call()
	console.log(result_0)
	this.setState({getCircleKey:JSON.stringify(result_0)})
};

//获取创建付费圈子所需的手续费
//免费圈子手续费位0
export const getCreatefee = async () => {
	let createfee = await contract.getCreatefee().call()
	this.setState({createfee});
	console.log(createfee)
	this.setState({getCreatefee:JSON.stringify(createfee)})
};


//创建圈子，参数是一个整数，是加入这个圈子需要收取的费用，0则表示免费
//
export const createCircle = async () => {
	let fee = 1000000;
	let callfee = 1;
	// if (fee > 0){
	//     callfee = this.createfee;
	// }

	//await tronWeb.transactionBuilder.sendTrx("TXPHCzmAmjyERtWES6EXTYqUPfJfQSzp2m",1000);
	let result_0 = await contract.createCircle(fee).send({
		feeLimit:100000000,
		callValue:callfee,
		shouldPollResponse:true
	})
	console.log(result_0)
};

//加入圈子,参数是一个数组，表示要加入圈子的key
export const joinCircle = async () => {
	let circle_keys = [1];
	let callfee = 0;
	//await tronWeb.transactionBuilder.sendTrx("TXPHCzmAmjyERtWES6EXTYqUPfJfQSzp2m",1000);
	let result_0 = await contract.joinCircle(circle_keys).send({
		feeLimit:10000000,
		callValue:callfee,
		shouldPollResponse:true
	})
	console.log(result_0)
};

//发布文章，参数是文章要发表到的圈子的key
//1. 该圈子存在
//2. 已经加入了该圈子
export const createMessage = async () => {
	let circle_key = 1;
	let callfee = 0;
	//await tronWeb.transactionBuilder.sendTrx("TXPHCzmAmjyERtWES6EXTYqUPfJfQSzp2m",1000);
	let result_0 = await contract.createMessage(circle_key).send({
		feeLimit:10000000,
		callValue:callfee,
		shouldPollResponse:true
	})
	console.log(result_0)
};

//打赏文章，参数两个 --- 文章的key， 要打赏的金额
export const payMessage = async () => {
	let message_key = 1;
	let money = 1;
	let callfee = money * 100000000; ///100trx
	//await tronWeb.transactionBuilder.sendTrx("TXPHCzmAmjyERtWES6EXTYqUPfJfQSzp2m",1000);
	let result_0 = await contract.payMessage(message_key,callfee).send({
		feeLimit:1000000000,
		callValue:callfee,
		shouldPollResponse:true
	})
	console.log(result_0)

};




export const getCircle = async () => {
	let result_0 = await contract.getCircle(2).call()
	console.log(result_0)
};

export const getUser = async () => {
	let result_0 = await contract.getUser().call()
	console.log(result_0)
};

export const getMessage = async () => {
	let result_0 = await contract.getMessage(1).call()
	console.log(result_0)
};
