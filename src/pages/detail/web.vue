<template>
	<div class="det-wrap">
		<div class="det-right-block block mar_b pad_lbrt2">
			<h2 class="det-right-title block">网站数据分析</h2>
			<p class="det-des block">信息安全等级保护对于网贷行业的发展尤为重要，网贷平台是否有效保护动辄数千万用户的“信息安全”成为各方关注的焦点。</p>
			<div class="det-form block">
				<h3 class="fl tar">购买数量：</h3>
				<select name="" class="fl">
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
				</select>
			</div>
			<div class="det-form block">
				<h3 class="fl tar">产品类型：</h3>
				<v-selection :selections="productTypes"></v-selection>
			</div>
			<div class="det-form block">
				<h3 class="fl tar">有效时间：</h3>
				<p class="fl">半年</p>
			</div>
			<div class="det-form block">
				<h3 class="fl tar">总价：</h3>
				<p class="fl">500元</p>
			</div>
			<div class="det-form block">
				<h3 class="fl tar">&nbsp;</h3>
				<a href="" class="button fl">立即购买</a>
			</div>
		</div>
		<div class="det-right-block block pad_lbrt2">
			<h2 class="det-right-title block">产品说明</h2>
			<p class="det-des block">基于恒昌惠诚多年来安全稳健的运营，恒昌与CFCA双方达成共识将在支付平台、电子认证、信息安全、风控、支付业务等更多的领域进行合作，为客户带来更好的用户体验、更加优质的服务。</p>
			<h4 class="pro-tit">用户行为指标</h4>
			<p class="pro-tit-con">用户在网站中的停留时间</p>
			<p class="pro-tit-con">用户加载网页的时间</p>
			<p class="pro-tit-con">用户注册的成功率</p>
			<p class="pro-tit-con">用户在网站中的停留时间</p>
			<p class="pro-tit-con">用户加载网页的时间</p>
			<p class="pro-tit-con">用户注册的成功率</p>
			<h4 class="pro-tit">浏览网页方式</h4>
			<p class="pro-tit-con">通过移动端浏览网站页面</p>
			<p class="pro-tit-con">用户通过PC端访问网页</p>
			<p class="pro-tit-con">其他网站友情链接</p>
			<p class="pro-tit-con">通过移动端浏览网站页面</p>
			<p class="pro-tit-con">用户通过PC端访问网页</p>
		</div>
	</div>
</template>

<script>
import VSelection from '../../components/selection'
export default {
	components:{
		VSelection
	},
	data () {
	return {
		productTypes:[
		{
			label:'入门版',
			value:0
		},
		{
			label:'中级版',
			value:1
		},
		{
			label:'高级版',
			value:2
		}
		]
	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
