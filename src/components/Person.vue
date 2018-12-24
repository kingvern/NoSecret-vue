<template lang="html">
    <div class="person">
        <nav class="person-tab" >
            <span class="tab-tag" v-on:click="switchPerson('my_post')" :class="currentPage == 'my_post'?'tab-select':''" >发布</span>
            <span class="tab-tag" v-on:click="switchPerson('my_comment')" :class="currentPage == 'my_comment'?'tab-select':''">评论</span>
            <span class="tab-tag" v-on:click="switchPerson('my_donate')" :class="currentPage == 'my_donate'?'tab-select':''">打赏</span>
        </nav>
        <div class="person-content" >
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: "person",
    data() {
        return {
            currentPage: 'my_post'
        };
    },
    created() {
        this.showMyPostPage()
    },
    activated() {
        var vue = this
        switch (vue.currentPage) {
            case 'my_post':
                vue.showMyPostPage()
                break;
            case 'my_comment':
                vue.showMyCommentPage()
                break;
            case 'my_donate':
                vue.showMyDonatePage()
                break;
            default:
                vue.showMyPostPage()
                break;
        }
    },
    deactivated() {

    },
    methods: {
        showMyPostPage() {
            this.$router.push({ name: 'mypost' })
            this.currentPage = 'my_post'
        },
        showMyCommentPage() {
            this.$router.push({ name: 'mycomment' })
            this.currentPage = 'my_comment'
        },
        showMyDonatePage() {
            this.$router.push({ name: 'mydonate' })
            this.currentPage = 'my_donate'
        },
        switchPerson(page) {
            var vue = this
            switch (page) {
                case 'my_post':
                    vue.showMyPostPage()
                    break;
                case 'my_comment':
                    vue.showMyCommentPage()
                    break;
                case 'my_donate':
                    vue.showMyDonatePage()
                    break;
                default:
                    vue.showMyPostPage()
                    break;
            }
        }
    }
}
</script>

<style lang="css">
.person {
    width: 100%;
    height: 100%;
}

.person .person-tab {
    width: 100%;
    height: 3.2rem;
    background: #FFFFFF;
    display: flex;
    flex-flow: row;
    text-align: center;
    line-height: 3.2rem;
    font-size: 1rem;
    position: fixed;
    /*bottom: 0;*/
	top: 4rem;
    color: #5d5d5d;
    z-index: 30;
    border-top: 1px solid rgba(0, 0, 0, .05);
}

.person .person-tab .tab-fixed {
    position: fixed;
    top: 0rem;
}

.person .person-tab .tab-tag {
    flex: 1;
}

.person .person-tab .tab-tag.tab-select {
    color: #007AFF;
}

.person .person-content {
    width: 100%;
    height: 100%;
	margin-top: 7.5rem;
    margin-bottom: 3.2rem;
}
</style>
