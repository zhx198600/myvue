<template>
  <div class="index-block clearfix pad_tb2">
    <div class="index-right fr">
    	<slide-item :slideCon="slideCon"  :inv="slideSpeed"></slide-item>
      <div class="index-board-list block mar_t">
        <h1 class="product-detail-title pad_lr2 pad_tb">产品特色</h1>
        <div class="index-board-item index-board-data">
          <div class="index-board-item-inner fl" v-for="product in productAnalysis">
          	<div class="item-icon">
          		<img :class="'icon-'+product.key" :src="product.src"></img>
          	</div>
            <h2>{{ product.title }}</h2>
            <p>{{ product.detail }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="index-left fl">
    	<div class="index-left-block">
    		<h2 class="block pad_l">数据分析</h2>
				<ul>
					<li class="pro-det block pad_l" v-for="item in dataAnalysis">
						<a :href="item.href" title="">{{ item.title }}</a>
					</li>
				</ul>
    		<h2 class="block pad_l">工具</h2>
				<ul>
					<li class="pro-det block pad_l" v-for="item in toolList">
						<a href="" title="">{{ item.title }}</a>
					</li>
				</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import slideItem from '../components/slideItem'
export default {
	components:{
	slideItem
	},
	data(){
		return{
			classA:'classA',
			dataAnalysis:[
			{
				title:'移动分析',
				href:"#/detail/mobile"
			},
			{
				title:'网站数据分析',
				href:"#/detail/web"
			},
			{
				title:'HTML5数据分析',
				href:"#/detail/code"
			},
			{
				title:'微信小程序分析',
				href:"#/detail/wechat"
			}
			],
			toolList:[
			{
				title:'移动推送',
				href:'XXXXXXX'
			},
			{
				title:'云数据库',
				href:"XXXXXXX"
			}
			],
			productAnalysis:[
			{
				src:require('../assets/web.png'),
				title:'网站数据实时分析',
				detail:'网站的访问情况、来源情况、访问路径等实时监控，了解访客的行为、属性等，以方便站长进行有效地网站运营。',
				key:'web',
			},
			{
				src:require('../assets/build.png'),
				title:'专业社区分析',
				detail:'与Discuz!合作，针对社区特点专门推出特色的统计分析功能，如会员与游客的分析、版块与主题的分析等。',
				key:'build'
			},
			{
				src:require('../assets/hot.png'),
				title:'网站热力图分析',
				detail:'提供网站页面热力区域分析，快速定位热门及冷门功能，帮助站长根据用户习惯定义网站板块，提升用户转化率。',
				key:'hot'
			},
			{
				src:require('../assets/draw.png'),
				title:'访客画像精准描绘',
				detail:'通过完善可依赖的用户画像体系，从基础属性、地理位置、访问深度等维度，协助您全方位描述业务的忠实用户。',
				key:'draw'
			}
			],
			slideSpeed:3000,
			slideCon:[
			{
                src:require('../assets/banner/01.jpg'),
				title:'移动数据分析',
				href:"XXXXXX"
			},
			{
                src:require('../assets/banner/02.jpg'),
				title:'网站数据统计',
				href:"XXXXXX"
			},
			{
                src:require('../assets/banner/03.jpg'),
				title:'HTML5数据分析',
				href:"XXXXXX"
			},
			{
                src:require('../assets/banner/04.jpg'),
				title:'微信小程序分析',
				href:"XXXXXX"
			}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot-tag{
	background: red;
	color:#fff;
    font-size:12px;
    padding: 0px 3px;
}
.slide-show{
  height:280px;
}
.index-board-item-inner{
	position:relative;
	width:270px;
	height:100px;
	padding:25px 0px 20px 120px;
	background:#fff;
	overflow:hidden;
}
.item-icon{
	position:absolute;
	width:88px;
	height:88px;
	border:#ccc solid 1px;
	border-radius: 3px;
	right:280px;
	top:50%;
	margin-top:-44px;
	text-align: center;
	vertical-align: middle;
}
/*.icon-web,.icon-build,.icon-hot,.icon-draw{
	display:inline-block;
	background-image: url("../assets/product.png");
}*/
.icon-web{
	width:60px;
	height:48px;
	margin-top: 20px;
	display:inline-block;
}
.icon-build{
	width: 68px;
	height: 55px;
	margin-top: 18px;
	display:inline-block;
}
.icon-hot{
	width: 59px;
	height: 56px;
	margin-top: 16px;
	display:inline-block;
}
.icon-draw{
	width: 68px;
    height: 50px;
	margin-top: 20px;
	display:inline-block;
}
.index-board-item-inner h2{
  font-size: 16px;
}
.index-board-item-inner p{
  display:block;
  width:260px;
  height:70px;
  line-height: 23px;
  font-size: 14px;
  color:#999;
}
.inner-gap{
  margin-left: 10px;
  margin-bottom: 10px;
}
.news-block{
  height:200px;
}
</style>
