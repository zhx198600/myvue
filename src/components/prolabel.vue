<template>
	<div class="label-component">
		<ul>
			<li 
			v-for="(item,index) in selections" 
			:class="{active:index===nowIndex}"
			@click="chooseLabel(index)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props:{
		selections:{
			type:Array,default:[{
				name:'test'
			}]
		}
	},
  data () {
    return {
    	nowIndex:0
    }
  },
  methods:{
  	chooseLabel(index){
  		this.nowIndex=index
  		this.$emit('on-change',this.nowIndex)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label-component ul li{
	display: inline-block;
	margin-right: 10px;
	padding: 0px 10px;
	border:#eee solid 1px;
	background:#fff;
}
.label-component ul li:hover,.label-component ul li.active{
	cursor:pointer;
	background: #f7a930;
	color: #fff;
	border:#e6961a solid 1px;
	border-radius: 1px;
}
</style>
