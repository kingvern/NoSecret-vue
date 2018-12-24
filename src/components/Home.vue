<template lang="html">
	<div>
		<div class="user-header">
				<span class="header-tag" v-on:click="switchHome('circle')"
					  :class="currentPage == 'circle'?'tab-select':''">关注</span>
			<span class="header-tag" v-on:click="switchHome('person')"
				  :class="currentPage == 'person'?'tab-select':''">个人</span>
		</div>
		<div class="home-content" >
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<!--<nav class="home-tab">-->
			<!--<span class="tab-tag" v-on:click="switchHome('circle')"-->
				  <!--:class="currentPage == 'circle'?'tab-select':''">关注</span>-->
			<!--<span class="tab-tag" v-on:click="switchHome('hot')"-->
				  <!--:class="currentPage == 'hot'?'tab-select':''">热度</span>-->
		<!--</nav>-->
		<!--<div class="home" id="home">-->
			<!--<div class="list" v-for="x in list">-->
				<!--<pixel-content :x="x"></pixel-content>-->
			<!--</div>-->
			<!--<div class="refresh-footer" v-if="option.refresh">-->
				<!--<pixel-spinner :size="'45px'" :color="'#007AFF'"></pixel-spinner>-->
			<!--</div>-->
		<!--</div>-->
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "home",
		data() {
			return {
				currentPage: 'circle'
			};
		},
		created() {
			this.showCirclePage()
		},
		mounted() {

		},
		activated() {
			var vue = this
			switch (vue.currentPage) {
				case 'circle':
					vue.showCirclePage()
					break;
				case 'person':
					vue.showPersonPage()
					break;
				default:
					vue.showCirclePage()
					break;
			}
		},
		deactivated() {
		},
		methods: {
			showCirclePage() {
				this.$router.push({ name: 'circle' })
				this.currentPage = 'circle'
			},
			showPersonPage() {
				this.$router.push({ name: 'person' })
				this.currentPage = 'person'
			},
			switchHome(page) {
				var vue = this
				switch (page) {
					case 'circle':
						vue.showCirclePage()
						break;
					case 'person':
						vue.showPersonPage()
						break;
					default:
						vue.showCirclePage()
						break;
				}
			}
		}

	}
</script>

<style lang="css">

	.user-header {
		width: 100%;
		height: 4rem;
		background: #ffffff;
		padding-left: 1rem;
		padding-right: 1rem;
		display: flex;
		flex-flow: row;
		position: fixed;
		justify-content: center;
		align-items: center;
		text-align: center;
		top: 0;
		z-index: 30;
	}

	.user-header .header-tag {
		font-size: 1.8rem;
		padding: 0.4rem;
	}

	.user-header .header-tag.tab-select {
		color: #007AFF;
	}

	.home-tab {
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

	.home-tab.tab-fixed {
		position: fixed;
		top: 0rem;
	}

	.home-tab .tab-tag {
		flex: 1;
	}

	.home-tab .tab-tag.tab-select {
		color: #007AFF;
	}

	.list {
		flex: 1;
		background-color: #fff;
		border-radius: 2px;
		padding: 1rem;
		margin-bottom: .8rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
	}

	.refresh-footer {
		margin-bottom: .8rem;
		margin-top: .8rem;
		text-align: center;
	}

	.home {
		margin-top: 7.3rem;
		margin-bottom: 4rem;
	}
</style>
