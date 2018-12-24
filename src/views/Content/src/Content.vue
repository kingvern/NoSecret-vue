<template lang="html">
    <div class="content" v-on:click="goDetailContent">
        <div class="list-header">
            <img class="avatar" v-if="x.user" :src="x.user.avatar_large">
            <div class="user-info">
                <h3 class="user-name" v-if="x.user">{{x.user.name}}</h3>
                <span class="user-source" v-html="x.source"></span>
            </div>
            <span class="user-time" >{{formatTime(x.created_at)}}</span>
        </div>
        <div class="list-content">
            <span class="content-text" v-html="formatContent(x.text)"></span>
            <div  class="content-img">
                <ul  class="content-img-ul clear-fix">
                    <li v-for="y in x.pic_urls" class="img-li-default" :class= "imgClass(x.pic_urls.length)"  >
                        <div class="img-div" v-on:click.stop="imageZoom(y.thumbnail_pic)" :style="{backgroundImage:'url(' + formatThumbImg(y.thumbnail_pic) + ')'}"></div>
                    </li>
                </ul>
            </div>
            <div class="content-re-content" v-if="x.retweeted_status">
                <span class="re-content-text" v-html="formatContent( '@' + x.retweeted_status.user.name + ': '
                    + x.retweeted_status.text)"></span>
                <div  class="content-img" v-if="x.retweeted_status.pic_urls">
                    <ul  class="content-img-ul clear-fix">
                        <li v-for="z in x.retweeted_status.pic_urls" class="img-li-default" :class= "imgClass(x.retweeted_status.pic_urls.length)"  >
                            <div class="img-div" :style="{backgroundImage:'url(' + formatThumbImg(z.thumbnail_pic) + ')'}"
                                v-on:click.stop="imageZoom(z.thumbnail_pic)"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="list-footer">
            <div class="footer-tag">
				<v-icon name="comment-dollar" />
                <span class="tag-style">{{formatNum(x.reposts_count)}}</span>
            </div>
            <div class="footer-tag">

				<v-icon name="regular/comment" />
                <span class="tag-style">{{formatNum(x.comments_count)}}</span>
            </div>
            <div class="footer-tag">

				<v-icon name="regular/thumbs-up"/>
                <span class="tag-style">{{formatNum(x.attitudes_count)}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import * as DateUtils from '../../../utils/date-utils'
import * as StringUtils from '../../../utils/string-utils'
import { mapActions } from 'vuex'
export default {
    name: "pixel-content",
    props: [
        'x'
    ],
    data() {
        return {
        };
    },
    methods: {
        ...mapActions([
            'setImageZoom',
            'setDetailContent'
        ]),
        goDetailContent() {
            this.setDetailContent(this.x)
            this.$router.push({name : 'detail-content'})
        },
        formatTime(time) {
            return DateUtils.format(time);
        },
        formatContent(content) {
            return StringUtils.formatContent(content)
        },
        compareImgSize(size) {
            let count = size / 3
            if (count >= 1) {
                return true
            } else {
                return false
            }
        },
        formatThumbImg(img) {
            return StringUtils.formatImgThumb(img)
        },
        formatMidImg(img) {
            return StringUtils.formatImgMiddle(img)
        },
        formatNum(num) {
            return StringUtils.formatNum(num)
        },
        imageZoom(url) {
            this.setImageZoom(this.formatMidImg(url))
            this.$router.push({ name: 'imageZoom' })
        },
        imgClass(size) {
            let clazz = ''
            switch (size) {
                case 1:
                    clazz = 'img-li-one'
                    break;
                case 2:
                case 4:
                    clazz = 'img-li-two'
                    break;
                default:
                    clazz = 'img-li-other'
                    break;
            }
            return clazz;
        }
    }
}
</script>

<style lang="css">
a {
    color: #007AFF;
}

.content .list-header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
}

.content .list-footer {
    width: 100%;
    margin-top: .7rem;
    color: #cdcdcd;
    display: flex;
    flex-flow: row;
}

.content .list-footer .footer-tag {
    width: 100%;
    height: 1.3rem;
    color: inherit;
	text-align: center;
}

.content .list-footer .footer-tag .tag-style {
    font-size: 12px;
}

.content .avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .05);
}

.content .user-info {
    margin-left: 1rem;
    display: flex;
    flex-flow: column;
    flex: 1;
}

.content .user-time {
    font-size: 1rem;
    color: #A4A8AC;
    height: 100%;
    display: table-cell
}

.content .user-info .user-name {
    margin: 0;
    flex: 1;
    font-size: 1.5rem;
}

.content .user-info .user-source {
    margin: 0;
    flex: 1;
    font-size: 1rem;
    color: #A4A8AC
}

.content .user-info .user-source a {
    color: #A4A8AC;
}

.content .list-content {
    margin-top: .7rem;
}

.content .list-content .content-text {
    font-size: 1.3rem;
    line-height: 1rem;
}

.content .list-content .content-at {
    color: #007AFF;
}

.clear-fix::after {
    content: '';
    display: block;
    clear: both;
}

.content .list-content .content-img .content-img-ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.content-img .content-img-ul .img-li-default {
    float: left;
    height: 0;
    margin-top: .4rem;
    margin-right: .4rem
}

.content-img .content-img-ul .img-li-one {
    width: 52%;
    padding-bottom: 52%;
}

.content-img .content-img-ul .img-li-two {
    width: 43%;
    padding-bottom: 43%;
}

.content-img .content-img-ul .img-li-other {
    width: 28%;
    padding-bottom: 28%;
}

.content-img .content-img-ul .img-div {
    width: 100%;
    padding-bottom: 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.content .list-content .content-re-content {
    width: 100%;
    margin-top: .7rem;
    border: 1px solid rgba(0, 0, 0, .05);
    border-radius: 3px;
    background-color: #f5f5f5;
    padding: .5rem;
}

.content .list-content .content-re-content .re-content-text {
    font-size: 1.3rem;
    line-height: 1rem;
}
</style>
