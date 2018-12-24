import * as user from './data/userInfo'
import * as status from './data/status'
import * as notify from './data/notify'
import * as friendship from './data/friendship'
import * as content from './data/content'


var userInfo = user.userInfo
var hometimeline = status.hometimeline
var publictimeline = status.publictimeline
var metimelime = status.metimeline
var atmestatus = notify.atmestatus
var attime = notify.attime
var athot = notify.athot
var atmecomment = notify.atmecomment
var receivecomment = notify.receivecomment
var sendcomment = notify.sendcomment
var myfollowers = friendship.myfollowers
var myfriends = friendship.mycircle
var contentcomment = content.contentcomment

export {
    userInfo,
    hometimeline,
    publictimeline,
    metimelime,
	attime,
	athot,
    atmestatus,
    atmecomment,
    receivecomment,
    sendcomment,
    myfollowers,
    myfriends,
    contentcomment
}
