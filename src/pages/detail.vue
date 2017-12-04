<template>
<div class="index-block clearfix pad_tb2">
    <div class="index-right fr">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="index-left fl">
    	<div class="index-left-block">
    		<h2 class="block pad_l">数据分析</h2>
			<ul>
				<router-link class="pro-det block pad_l" :key="item.id" v-for="item in data" tag="li" :to="{path:item.path}" active-class="active">
					<a href="" title="">{{ item.title }}</a>
				</router-link>
			</ul>
    	</div>
    </div>
  </div>
</template>
<script>
export default {
data(){
	return{
			data:[
			{
				title:'移动数据分析',
				href:"XXXXXXX",
				path:'mobile'
			},
			{
				title:'网站数据分析',
				href:"XXXXXXX",
				path:'web'
			},
			{
				title:'HTML5数据分析',
				href:"XXXXXXX",
				path:'code'
			},
			{
				title:'微信小程序分析',
				href:"XXXXXXX",
				path:'wechat'
			}
			]
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.det-right-block{
  background: #f4f4f4;
  overflow: hidden;
  border:#e9e9ef solid 1px;
}
.det-right-title{
  font-size: 16px;
  color: #2fa8e6;
  padding-bottom:5px;
  border-bottom: #ccc solid 1px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.det-des{
  font-size: 14px;
  height:auto;
  line-height: 25px;
  color:#666;
 /* width:750px;*/
  margin:0px 0px 15px 0px;
  overflow:hidden;
  text-indent: 2em;
}
.det-form{
  height:30px;
  font-size: 14px;
}
.det-form h3{
  width:100px;
}
.product-des li{
  display: inline-block;
  margin:5px;
  font-size: 14px;
}

.pro-tit{
  font-size: 14px;
  font-weight: bold;
  height:30px;
  line-height: 30px;
  margin-top: 10px;
}
.pro-tit-con{
  font-size: 12px;
  height:22px;
  line-height: 22px;
  color:#333;
}
</style>
