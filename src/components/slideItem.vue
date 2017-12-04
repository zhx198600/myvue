<template>
  <div class="slide"  @mouseover="clearInv" @mouseout="runInv">
  	<ul class="slide-con">
		<li class="slide-item">
			<transition name="fade">
				<img v-if="isShow" :src="slideCon[nowIndex].src" alt="">
			</transition>
			<transition name="fade-old">
				<img v-if="!isShow" :src="slideCon[nowIndex].src" alt="">
			</transition>
		</li>
  	</ul>
    <div class="opac"></div>
    <ul class="slide-pages fr">
    	<li @click="goto(prevIndex)">&lt;</li>
    	<li v-for="(item,index) in slideCon" @click="goto(index)">
    		<a :class="{on:index===nowIndex}">{{index+1}}</a>
    	</li>
    	<li @click="goto(nextIndex)">&gt;</li>
    </ul>
    <h2 class="slide-title fl mar_l">{{slideCon[nowIndex].title}}</h2>
  </div>
</template>
console.log(slideCon[nowIndex].id);
<script>
export default {
	props:{
		slideCon:{
			type:Array,
			default:[]
		},
		inv:{
			type:Number,
			default:2000
		}
	},
	data(){
		return{
			nowIndex:0,
            isShow:true
		}
	},
  computed:{
  	prevIndex(){
  		if(this.nowIndex===0){
  			return this.slideCon.length-1
  		}
  		else{
  			return this.nowIndex-1
  		}
  	},
  	nextIndex(){
  		if(this.nowIndex===this.slideCon.length-1){
  			return 0
  		}
  		else{
  			return this.nowIndex+1
  		}
  	}
  },
  methods:{
  	goto(index){
  		this.isShow=false
  		setTimeout(()=>{
  			this.isShow=true
  			this.nowIndex=index
  		},10)
  	},
  	runInv(){
  		this.invId=setInterval(()=>{
  			//console.log(123)
  			this.goto(this.nextIndex)
  		},this.inv)
  	},
  	clearInv(){
  		clearInterval(this.invId)
  	}
  },
  mounted(){
  	this.runInv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide{
    display: block;
    clear: both;
    width:790px;
    height: 300px;
    margin: 0px auto;
    position: relative;
    overflow: hidden;
    background: #f9f9f9;
}
.slide-con{
    position: absolute;
    width: 30000px;
    height: 300px;
    left: 0px;
    top:0px;
}
.slide-item{
    display: block;
    float: left;
    height: 300px;
    width:790px;
    background-size:790px 300px;
}
.slide-item img{	
    height: 300px;
    width:790px;
}
.slide-pages li{
	display: inline-block;
	margin-right: 10px;
}
.opac{
	background: #000;
	opacity:0.5;
	width:790px;
	height:25px;
	position:absolute;
	z-index: 1;
	bottom:0px;
	left:0px;
}
.slide-pages,.slide-title{
	position:absolute;
	z-index: 2;
	bottom:2px;
	color: #fff;
	font-size: 14px;
}
.slide-pages{
	right:20px;
}
.slide-pages li:hover{
	cursor:pointer;
}
.slide-pages li a{
	color:#fff;
	font-size: 12px;
	display:block;
	padding: 0px 5px;
}
.slide-pages li a.on{
	color:#333;
	background:#fff;
	border-radius: 10px;
}
.fade-enter-active{
	transition:all 1s;
}
.fade-enter{
	/*transform:skew(90deg,10deg);*/
	  transform:scale(5,5);
    -ms-transform:scale(5,5); /* IE 9 */
    -webkit-transform:scale(5,5); /* Safari and Chrome */
}
.fade-old-leave-active{
	transition:all .5s;
	transform:scale(0,0);
}
</style>
