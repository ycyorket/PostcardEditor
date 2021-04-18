<template>
	<div v:if="siderDisplay" class="sider">
		<div class="content">
			<div class="input-header">标题: 
				<input v-model="header" type="text" placeholder="标题"> 
			</div>
			<div class="input-text">
				<textarea v-model="text" type="text" placeholder="正文"></textarea> 
			</div>
			<div class="input-location">在
				<input v-model="location" type="text" placeholder="地点">
			</div>
			<div class="input-image">
				<div class="input-image-button">
					<input type="file" accept="image/*" @change="changeImage($event)" ref="avatarInput" placeholder="选择图像">
				</div>
			</div>
			<div class="content-display" :style="{backgroundRepeat: 'no-repeat', backgroundImage: image, backgroundSize: 'contain', backgroundPosition: 'center', maxWidth: '100%', maxHeight:'100%'}">
				<div class="content-header"> 
					<h3>{{header}}</h3>
				</div>
				<div class="content-text"> 
					<p>{{text}}</p> 
				</div>
				<div class="content-time"> 
					<p>{{currentDate+' '+currentTime+' '+currentDay}}</p> 
				</div>
				<div class="content-location"> 
					<p>{{location}}</p> 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import Vue from 'vue'
	import axios from 'axios'
	Vue.prototype.$axios = axios 
	export default {
		name: 'Sider',
		props: {
			siderDisplay: Boolean
		},
		data(){
			return {
					header: "日本行 day1",
					text: "今天我们终于到了北海道！",
					currentDate: "2020/4/12",
					currentTime: "17:23",
					currentDay: "星期日",
					image: "inherit",
					location: "札幌, 北海道, 日本",
					contentDisplayStyle:{
				}
			}
		},
		watch: {
			header(val) {
				this.$parent.header = val;
			},
			text(val) {
				this.$parent.text = val;
			},
			image(val) {
				this.$parent.image = val;
			}
		},
		methods:{
			updateTime(){
				setInterval(this.getDate, 500);
			},
			getDate: function() {
				var that = this;
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let day = new Date().getDay();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
				if (day == 1) {
					this.currentDay = "星期一";
				} else if (day == 2) {
					this.currentDay = "星期二";
				} else if (day == 3) {
					this.currentDay = "星期三";
				} else if (day == 4) {
					this.currentDay = "星期四";
				} else if (day == 5) {
					this.currentDay = "星期五";
				} else if (day == 6) {
					this.currentDay = "星期六";
				} else {
					this.currentDay = "星期日";
				}
				that.currentTime = hh + ":" + mf;
				that.currentDate = yy + "/" + mm + "/" + dd;
			},
			beforeDestroy: function(){
				if (this.getDate)
					clearInterval(this.getDate);
			},
			showBackground: function(u){
				this.image = 'url('+u+')';
				/*
				var style = {};
				style['background'] = 'url('+u+') no-repeat';
				this.contentDisplayStyle = style;*/
			},
			changeImage: function(event){
				let reader = new FileReader();
				let img1 = event.target.files[0];
				let size = img1.size;
				if(size > 3145728){
					alert('请选择3M以内的图片！');
					return false;
				}
				var that = this;
				reader.readAsDataURL(img1);
				reader.onloadend=function(){
					that.showBackground(this.result);
				};
			}
		},
		mounted() {
			this.updateTime();
		}
	}
</script>

<style scoped>
	.sider{
		position: relative;
		background: inherit;
		z-index: 2;
		width: 20%;
		box-sizing: border-box;
		padding: 1px;
	}
	
	.content{
		margin: 5%;
		text-align: center;
		line-height: inherit;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 95%;
	}
	
	.content>div{
		margin: 3%;
		/*border: 1px solid red;*/
	}
	
	.input-header input{
		background: transparent;
		border-style:none;
	}
	
	.input-header input:hover{
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	}
	
	.input-text{
		height: 30%;
	}
	
	.input-text textarea{
		background:transparent;
		border-style:none;
		width: 80%;
		height: 90%;
		maxlength: 180;
		resize: none;
	}
	
	.input-text textarea:hover{
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	}
	
	.input-location input{
		background: transparent;
		border-style:none;
	}
	
	.input-location input:hover{
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	}
	
	.input-image{
		background: url(../assets/addImage.png) no-repeat;
		background-size:contain;
		background-position: center;
		max-width:100%;
		max-height:100%;
		display: flex;
		flex-direction: column;
	}
	
	.input-image-button{
		height: 100%;
		width: 100%;
	}
	
	.input-image-button input{
		height: 100%;
		width: 100%;
		filter: alpha(opacity=0);
		opacity: 0;
	}
	
	.input-image-button:hover{
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	}
	
	.content-display{
		background-size:contain;
		background-position: center;
		max-width:100%;
		max-height:100%;
		color: white;
		overflow: hidden;
	}
	
	.content-header{
		font-weight: bold;
		font-size: 100%;
	}
	
	.content-text{
		text-align: left;
		text-indent: 10%;
		font-size: small;
		height:auto;
		width:100%;
	}
	
	.content-text p{
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		word-break: break-all;
	}
	
	.content-time{
		text-align: right;
		font-size: xx-small;
	}
	
	.content-location{
		text-align: right;
		font-size: xx-small;
	}
	
	.sider::before{
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		content: "";
		background: inherit;
		filter: blur(15px);
		z-index: -1;
	}
</style>
