<template lang="html">
	<div  class="circle">
		<nav class="circle-tab">
			<span class="tab-tag" v-on:click="switchCircle('time')"
				  :class="currentPage == 'time'?'tab-select':''">最新</span>
			<span class="tab-tag" v-on:click="switchCircle('hot')"
				  :class="currentPage == 'hot'?'tab-select':''">热度</span>
		</nav>
		<div class="circle-content" >
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name: "circle",
		data() {
			return {
				currentPage: 'time'
			};
		},
		created() {
			this.showTimePage()
		},
		activated() {
			var vue = this
			switch (vue.currentPage) {
				case 'hot':
					vue.showHotPage()
					break;
				case 'time':
					vue.showTimePage()
					break;
				default:
					vue.showHotPage()
					break;
			}
		},
		deactivated() {
		},
		methods: {
			showTimePage() {
				this.$router.push({ name: 'attime' })
				this.currentPage = 'time'
			},
			showHotPage() {
				this.$router.push({ name: 'athot' })
				this.currentPage = 'hot'
			},
			switchCircle(page) {
				var vue = this
				switch (page) {
					case 'hot':
						vue.showHotPage()
						break;
					case 'time':
						vue.showTimePage()
						break;
					default:
						vue.showHotPage()
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

	.circle-tab {
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

	.circle-tab.tab-fixed {
		position: fixed;
		top: 0rem;
	}

	.circle-tab .tab-tag {
		flex: 1;
	}

	.circle-tab .tab-tag.tab-select {
		color: #007AFF;
	}

	.circle .circle-content {
		width: 100%;
		height: 100%;
		margin-top: 7.5rem;
		margin-bottom: 3.2rem;
	}
</style>
