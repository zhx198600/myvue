import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/pages/index'
import detailPage from '@/pages/detail'
import codePage from '@/pages/detail/code'
import mobilePage from '@/pages/detail/mobile'
import webPage from '@/pages/detail/web'
import wechatPage from '@/pages/detail/wechat'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
	// mode:'history',
	routes: [
	{
	  path: '/',
	  component: indexPage
	},
	{
	  path: '/detail',
	  component: detailPage,
	  redirect:'/detail/code',
	  children:[
	  {
	  	path:'code',
	  	component:codePage
	  },
	  {
	  	path:'mobile',
	  	component:mobilePage
	  },
	  {
	  	path:'web',
	  	component:webPage
	  },
	  {
	  	path:'wechat',
	  	component:wechatPage
	  }
	  ]
	},
	]
})
