export const login = state => state.auth.login
export const token = state => state.auth.token
export const userInfo = state => state.userInfo.userInfo

// main
export const home_timeline = state => state.home_timeline.statuses
export const home_timeline_option = state => state.home_timeline.option

// explore
export const public_timeline = state => state.public_timeline.statuses
export const public_timeline_option = state => state.public_timeline.option

// person

export const address = state => state.tron.address
export const contract = state => state.tron.contract
export const checkUserRes = state => state.tron.checkUserRes
export const writeHash = state => state.tron.writeHash
export const user = state => state.tron.user
export const createfee = state => state.tron.createfee



export const at_time = state => state.at_time.statuses
export const at_time_option = state => state.at_time.option

export const at_hot = state => state.at_hot.statuses
export const at_hot_option = state => state.at_hot.option

export const my_post = state => state.my_post.statuses
export const my_post_option = state => state.my_post.option

export const my_comment = state => state.my_comment.statuses
export const my_comment_option = state => state.my_comment.option

export const my_donate = state => state.my_donate.statuses
export const my_donate_option = state => state.my_donate.option


export const my_circle = state => state.my_circle.circle_list
export const my_circle_option = state => state.my_circle.option


export const all_circle = state => state.all_circle.circle_list
export const all_circle_option = state => state.all_circle.option

export const at_me_status = state => state.at_me_status.statuses
export const at_me_status_option = state => state.at_me_status.option
export const at_me_comment = state => state.at_me_comment.comments
export const at_me_comment_option = state => state.at_me_comment.option
export const receive_comment = state => state.receive_comment.comments
export const receive_comment_option = state => state.receive_comment.option
export const send_comment = state => state.send_comment.comments
export const send_comment_option = state => state.send_comment.option

// mycontent
export const my_content = state => state.my_content.statuses
export const my_content_option = state => state.my_content.option

// imagezoom
export const image_zoom_url = state => state.image_zoom.image_url
export const image_zoom_show = state => state.image_zoom.show

// detialcontent
export const detail_content = state => state.detail_content.content

// detailcontent commenmts
export const comments = state => state.content_comments.comments
export const comments_option = state => state.content_comments.option

// myfollower
export const my_follower = state => state.my_follower.users
export const my_follower_option = state => state.my_follower.option

// myfriend
export const my_friend = state => state.my_friend.users
export const my_friend_option = state => state.my_friend.option
