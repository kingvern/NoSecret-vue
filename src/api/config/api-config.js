const key_config = {
    app_key: '3436445128',
    app_secret: '6a1d41d969da490d9a37d4457184ea0b',
    redirect_uri: 'http://192.168.1.104:8089/splash'
}

const host_config = {
    local: 'http://192.168.1.104:8089/',
    host: 'http://123.207.75.151:8000',
    oauth: 'https://open.weibo.cn/oauth2/authorize',
	count: '10'
}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    home_timeline: '/statuses/home_timeline.json',
    public_timeline: '/statuses/public_timeline.json',
    my_content: '/statuses/user_timeline.json',

    userinfo: '/api/v1/dev/myinfo',
	get_all_circle:'/api/v1/dev/allcircles',
	get_my_circle:'mycircles',

    content_comments: '/api/v1/dev/messageinfo',
	send_post: '/api/v1/dev/create_message',
	at_time:'/api/v1/dev/newmessages',
	at_hot:'/api/v1/dev/topmessages',
	my_post:'/api/v1/dev/mymessages',
	my_comment:'/api/v1/dev/mycomments',
	my_donate:'/api/v1/dev/mygives',

    send_post_text: '/statuses/update.json',
    send_post_image: '/statuses/upload.json',
    at_me_statue: '/statuses/mentions.json',
    at_me_comment: '/comments/mentions.json',
    receive_comment: '/comments/to_me.json',
    send_comment: '/comments/by_me.json',
    my_follower: '/friendships/followers.json',
    my_friend: '/friendships/friends.json'
}

export const HOST_CONFIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
