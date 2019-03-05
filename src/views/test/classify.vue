<template>
	<div>
		<div id="classify">
			<div class="classify-header">
				112233
			</div>
			<div class="classify-contianer" :style="{height:height}">
				<!-- <div class="classify-nav">
					<div class="classify-nav-item" v-for="(item,index) in title" :key="index" @click="getindex(index)">
						<div>{{item}}</div>
					</div>
				</div> -->
				<div class="classify-panel" v-for="(item,index) in merList" :key="index">
					<div class="classify-tab">
						<div class="classsify-tab-item" v-for="(z,index) in tab" :key="index" @click="cuttab(index)" >
							<div>{{z}}</div>
						</div>
					</div>
					<div class="cl-list">
						<div class="classify-list" v-for="(x,index) in item.list.listOne" :key="index" v-show="cut">
							<image :src="x.src" class="cl-list-img"></image>
							<div class="cl-list-div">{{x.classifydiv}}</div>
						</div>
						<div class="classify-list" v-for="(k,index) in item.list.listTwo" :key="'k'+index" v-show="!cut" >
							<image :src="k.src" class="cl-list-img"></image>
							<div class="cl-list-div">{{k.classifydiv}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				num: 0,
				title: ["主粮", "罐头", "零食", "玩具", "洗护", "保健", "服饰", "清洁", "出行", "家居"],
				height: '800px',
				merList: [{
						list: {
							listOne:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮",
								}
							],
							listTwo:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮1",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮2",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮3",
								}
							]
						}
					},
					{
						list: {
							listOne:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮4",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮5",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮6",
								}
							],
							listTwo:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮7",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮8",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮9",
								}
							]
						}
					},
					{
						list: {
							listOne:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮11",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮12",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮13",
								}
							],
							listTwo:[{
									src: "../../static/classify-list.png",
									classifydiv: "进口猫粮14",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "进口狗粮15",
								},
								{
									src: "../../static/classify-list.png",
									classifydiv: "国产猫粮16",
								}
							]
						}
					}
				],
				sequence: 0,
				over: false,
				tab: ["分类", "品牌"],
				cut:true,
				stop:false
			};
		},
		methods: {
			getindex(i) {
				if (this.over) return;
				this.over = true;
				this.sequence = i;
				setTimeout(() => {
					this.over = false;
				}, 200);
			},
			cuttab(index){
				if(index === this.num){
					this.cut = true;
				} else {
					this.cut = false;
				}
			}
		}
	}
</script>

<style>
	.classify-header {
		display: flex;
		justify-content: center;
		padding: 58upx 0 14upx 0;
		background: -webkit-linear-gradient(left, #ff644c, #ff7c4c);
		background: -o-linear-gradient(right, #ff644c, #ff7c4c);
		background: -moz-linear-gradient(right, #ff644c, #ff7c4c);
		background: linear-gradient(to right, #ff644c, #ff7c4c);

	}

	.classify-contianer {
		display: flex;

	}

	.classify-nav {
		width: 180upx;
	}

	.classify-nav-item {
		padding: 36upx 0;
		div-align: center;
		font-size: 28upx;
		line-height: 28upx;
		color: #444444;
	}

	.classify-panel {
		flex-grow: 1;
		background: #ffffff;
	}

	.classify-tab {
		display: flex;
		width: 100%;
	}

	.classsify-tab-item {
		width: 50%;
		div-align: center;
		padding: 35upx 0;
		font-size:26upx;
		line-height: 26upx;
		color: #000000;
	}

	,
	.classify-panel {
		width: 570upx;
	}

	.cl-list {
		display: flex;
		align-content: flex-start;
		flex-wrap: wrap;
	}

	.classify-list {
		width: 33.3%;
		padding-top: 25upx;
		margin-bottom: 15upx;
	}

	.cl-list-img {
		display: block;
		width: 133upx;
		height: 133upx;
		margin: 0 auto 40upx auto;
	}

	.cl-list-div {
		font-size: 24upx;
		line-height: 24upx;
		color: #999999;
		div-align: center;
		display: block;
	}
</style>
