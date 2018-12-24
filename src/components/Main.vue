<template lang="html">
    <div class="main">
        <div >
            <div id="content" class="app-content">
                <transition name="fade">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
			<nav class="switch-tab" >
				<span class="tab-tag" v-on:click="switchTab('home')" :class="currentPage == 'home'?'tab-select':''" ><v-icon name="home"/></span>
				<span class="tab-tag" v-on:click="switchTab('post')" :class="currentPage == 'post'?'tab-select':''"><v-icon name="pen-nib"/></span>
				<span class="tab-tag" v-on:click="switchTab('profile')" :class="currentPage == 'profile'?'tab-select':''"><v-icon name="mask"/></span>
			</nav>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: "main",
    data() {
        return {
            currentPage: 'home'
        }
    },
    computed: {
        ...mapGetters({
            token: 'token',
            userInfo: 'userInfo',
            showImage: 'image_zoom_show'
        })
    },
    created() {
        // this.getUserInfo(this.token.uid)
        this.showHomePage()
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getUserInfo',
            'getHomeTimeline',
            'getPublicTimeline'
        ]),
		showHomePage() {
			this.$router.push({ name: 'home' })
			this.currentPage = 'home'
		},
		showPostPage() {
			this.$router.push({ name: 'post' })
			this.currentPage = 'post'
		},
        showProfilePage() {
            this.$router.push({ name: 'profile' })
			this.currentPage = 'profile'
        },
		goNotify() {
			this.$router.push({ name: 'notify' })
		},

        goExplore() {
            this.$router.push({ name: 'explore' })
            this.currentPage = 'explore'
        },
        goNotify() {
            this.$router.push({ name: 'notify' })
            this.currentPage = 'notify'
        },
        refresh() {
            switch (this.currentPage) {
                case 'home':
                    this.getHomeTimeline(1)
                    break;
                case 'explore':
                    this.getPublicTimeline(1);
                    break;
                default:
                    break;
            }

        },
        switchTab(page) {
            var vue = this
            switch (page) {
                case 'home':
                    vue.showHomePage()
                    break;
				case 'post':
					vue.showPostPage()
					break;
				case 'profile':
					vue.showProfilePage()
					break;
                case 'explore':
                    vue.goExplore()
                    break;
                case 'notify':
                    vue.goNotify()
                    break;
                default:
                    vue.showHomePage()
                    break;
            }
        }
    }
}
</script>

<style lang="css">
.main {
    /*padding-top: 4.3rem;*/
}


.user-header .header-refresh {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.25rem;
    color: #5d5d5d;
}

.main .switch-tab {
    width: 100%;
    height: 3.5rem;
    background: #f4f5f5;
    display: flex;
    flex-flow: row;
    text-align: center;
    line-height: 3.5rem;
    font-size: 1.35rem;
    font-weight: 600;
    color: #5d5d5d;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
    position: fixed;
    bottom: 0rem;
    z-index: 30;
}

.main .switch-tab.tab-fixed {
    position: fixed;
    top: 0rem;
}

.main .switch-tab .tab-tag {
    flex: 1;
}

.main .switch-tab .tab-tag.tab-select {
    color: #007AFF;
    border-bottom: 2px solid #007AFF;
}


.fade-enter-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
