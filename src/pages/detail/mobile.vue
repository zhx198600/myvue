<template>
	<div class="det-wrap">
		<div class="det-right-block block mar_b pad_lbrt2">
			<h2 class="det-right-title block">移动数据分析</h2>
			<p class="det-des block">随着网络技术的飞速发展和各类信息系统的广泛应用, 网络与信息安全也相应出现许多新情况、新问题。</p>
			<div class="det-form block">
				<h3 class="fl tar">购买数量：</h3>
				<v-label :selections="productLabels"></v-label>
			</div>
			<div class="det-form block">
				<h3 class="fl tar">适用地区：</h3>
				<v-selection :selections="areaTypes"></v-selection>
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
			<p class="det-des block">作为一直致力于全方位网络信任体系的构建的CFCA，是由中国人民银行于1998年牵头组建、经国家信息安全管理机构批准成立的国家级权威安全认证机构。</p>
			<ul class="product-des block">
				<li>数据安全</li>
				<li>人民银行</li>
				<li>网络信任</li>
				<li>牵头组建</li>
				<li>安全认证</li>
				<li>安全机构</li>
				<li>网络诈骗</li>
				<li>数据窃取</li>
				<li>资源共享</li>
				<li>数据安全</li>
				<li>牵头组建</li>
				<li>安全认证</li>
				<li>安全机构</li>
				<li>网络诈骗</li>
				<li>牵头组建</li>
				<li>安全认证</li>
				<li>安全机构</li>
				<li>网络诈骗</li>
				<li>牵头组建</li>
				<li>安全认证</li>
				<li>安全机构</li>
				<li>网络诈骗</li>
				<li>数据窃取</li>
				<li>资源共享</li>
				<li>数据安全</li>
				<li>数据窃取</li>
				<li>资源共享</li>
				<li>数据安全</li>
				<li>数据窃取</li>
				<li>资源共享</li>
				<li>数据安全</li>
			</ul>
		</div>
	</div>
</template>

<script>
import VSelection from "../../components/selection"
import VLabel from "../../components/proLabel"
export default {
	components:{
		VSelection,
		VLabel
	},
  data () {
    return {
    	areaTypes:[
    	{
    		label:'天津',
    		value:0
    	},
    	{
    		label:'北京',
    		value:0
    	},
    	{
    		label:'上海',
    		value:0
    	},
    	{
    		label:'广州',
    		value:0
    	}
    	],
    	productLabels:[
    	{
    		name:'红色版'
    	},
    	{
    		name:'蓝色版'
    	},
    	{
    		name:'白色版'
    	},
    	{
    		name:'黑色版'
    	}
    	]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
