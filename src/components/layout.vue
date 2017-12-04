<template>
  <div class="layout">
    <div class="app-header pad_lr">
    	<ul class="nav-list fr">
        <li class="fl">{{userName}}</li>
        <li v-if="userName!==''" class="fl nav-pile">|</li>
        <li v-if="userName!==''" class="fl">退出</li>
    		<li v-if="userName===''" class="fl" @click="logDialog">登录</li>
    		<li class="fl nav-pile">|</li>
    		<li v-if="userName===''" class="fl" @click="regDialog">注册</li>
    		<li v-if="userName===''" class="fl nav-pile">|</li>
    		<li class="fl" @click="aboutDialog">关于</li>
    	</ul>
      <router-link :to="{path:'/'}" class="logo fl mar_t2">
        <img class="fl" src="../assets/logo.png" alt="">
        <h1 class="fl">移动大数据分析平台</h1>
      </router-link>
    </div>
    <div class="app-content clearfix">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer block clearfix">
      <p>浙江大学大数据研究院 版权所有</p>
    	<p>Copyright©2014 big data. All Rights Reserved</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>同时苏联的解体，也使乌克兰的武器成为了中国的抢手武器，很多武器装备都以非常低的价格卖给了中国，但也有很多武器在美苏的干涉里最终放弃了卖给中国，不过还是给中国很多军事技术上的支持。比如中国的歼-15就是在乌克兰的苏-33的基础上改装而来的。</p>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccesLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form @reging="onSuccesReg"></reg-form>
    </my-dialog>
  </div>
</template>

<script>
import myDialog from './dialog'
import logForm from './logform'
import regForm from './regform'
export default {
  components:{
    myDialog,
    logForm,
    regForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      userName:''
    }
  },
  methods:{
    aboutDialog(){
      this.isShowAboutDialog=true
    },
    logDialog(){
      this.isShowLogDialog=true
    },
    regDialog(){
      this.isShowRegDialog=true
    },
    closeDialog(attr){//console.log(attr);
      this[attr]=false
    },
    onSuccesLog(logUser){
      console.log(logUser)
      this.closeDialog('isShowLogDialog')
      this.userName=logUser
    },
    onSuccesReg(data,regUser,regPass){
      // data[data.length]={"id":data.length,"userName":regUser,"password":regPass}
      data.user.push({"id":data.user.length,"userName":regUser,"password":regPass})
      console.log(data)
      this.closeDialog('isShowRegDialog')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body, div, dl, dt, dd, ul, ol, li,
h1, h2, h3, h4, h5, h6, pre, code,
form, fieldset, legend, input, button,
textarea, p, blockquote, th, td {
margin: 0;
padding: 0;
}
fieldset, img {
border: 0;
}
/* remember to define focus styles! */
:focus {
outline: 0;
}
address, caption, cite, code, dfn,
em,i, strong, th, var, optgroup {
font-style: normal;
font-weight: normal;
}

h1, h2, h3, h4, h5, h6 {
font-size: 100%;
font-weight: normal;
}
abbr, acronym {
border: 0;
font-variant: normal;
}

input, button, textarea,
select, optgroup, option {
font-family: inherit;
font-size: inherit;
font-style: inherit;
font-weight: inherit;
}
code, kbd, samp, tt {
font-size: 100%;
}
/*@purpose To enable resizing for IE */
/*@branch For IE6-Win, IE7-Win */
input, button, textarea, select {
*font-size: 100%;
}
body {
line-height: 1.5;
font-family: "微软雅黑";
background:#fff;
}
ol, ul {
list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
border-collapse: collapse;
border-spacing: 0;
}
caption, th {
text-align: left;
}
sup, sub {
font-size: 100%;
vertical-align: baseline;
}
/* remember to highlight anchors and inserts somehow! */
:link, :visited , ins {
text-decoration: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
.clearfix:before,.clearfix:after{
 display:table;
 content:"";}
.clearfix:after{
 clear:both;}
.clearfix{zoom:1;}

/*内边距*/
.pad_lbrt{ padding:10px;}
.pad_lbr{ padding:10px; padding-top:0px;}
.pad_t{ padding-top:10px;}
.pad_b{ padding-bottom:10px;}
.pad_l{padding-left:10px;}
.pad_tb{ padding-top:10px; padding-bottom:10px;}
.pad_lr{ padding-left:10px;padding-right:10px;}
.pad_t2{ padding-top:20px;}
.pad_b2{ padding-bottom:20px;}
.pad_tb2{ padding-top:20px; padding-bottom:20px;}
.pad_lr2{ padding-left:20px;padding-right:20px;}
.pad_lbrt2{ padding:20px;}

/*外边距*/
.mar_t{ margin-top:10px;}
.mar_l{ margin-left:10px;}
.mar_r{ margin-right:10px;}
.mar_b{ margin-bottom:10px;}
.mar_lbr{ margin:10px; margin-top:0px;}
.mar_lbrt{ margin:10px;}
.mar_lr{ margin-left:10px; margin-right:10px;}
.mar_tb{ margin-top:10px; margin-bottom:10px;}
.mar_n{ margin:0px;}
.mar_t2{ margin-top:20px;}
.mar_b2{ margin-bottom:20px;}
.mar_tb2{ margin-top:20px; margin-bottom:20px;}

/*边框*/
.box_l{ border-left:1px solid #ccc;}
.box_t{ border-top:1px solid #ccc;}
.box_r{ border-right:1px solid #ccc;}
.box_b{ border-bottom:1px solid #ccc;}
.box_lbr{ border:1px solid #ccc; border-top:none;}
.box_lbrt{ border:1px solid #ccc; }
.box_lrt{ border:1px solid #ccc; border-bottom:none}
.box_lr{ border-left:1px solid #ccc; border-right:1px solid #ccc; }
.box_tb{ border-top:1px solid #ccc; border-bottom:1px solid #ccc; }
.box_n{ border:none;}

/*浮动*/
.fl{float:left;}
.fr{float:right;}

/*对齐*/
.tac{ text-align: center;}
.tar{text-align: right;}
.layout{
    display:block;
    clear:none;
    margin:0px auto;
	min-width: 980px;
	width:100%;
}
.gap{
	display:block;
	clear:both;
	overflow:hidden;
	height:10px;
	line-height: 10px;
	background:#efefef;
}
.hr{
	display:block;
	clear:both;
	height:1px;
	line-height: 1px;
	background:#ddd;
}
.block{
	display: block;
	clear:both;
}
/**{
  box-sizing:border-box;
}*/
input[type=text]:focus,input[type=password]:focus{
  border:#666 solid 1px;
}
/*header*/
.app-header{
	height:100px;
	background: #333;
	color:#fff;
}
.logo h1{
  line-height: 50px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 200;
  text-shadow:#666 1px 1px;
  color:#fff;
}
.nav-list{
	display:block;
	height:30px;
	line-height: 30px;
	margin-top: 30px;
}
.nav-list li{
	display:block;
	padding:0px 3px;
	color:#fff;
	font-size: 14px;
	cursor:pointer;
}
.nav-list li:hover{
  text-decoration: underline;
}
/*footer*/
.app-footer{
	height:80px;
	background:#e9e9ef;
  padding-top: 40px;
}
.app-footer p{
	color:#333;
	text-align: center;
  font-size: 12px;
  line-height: 22px;
}
/*content*/
.index-block{
	width:980px;
	margin: 0px auto;
}
.index-left{
  background:#fff;
  width:180px;
}
.index-right{
  width:790px;
}
/*dialog*/
.dialog-wrap{
  position: fixed;
  width:100%;
  height:100px;
  z-index: 10;
}
.dialog-cover{
  background: #000;
  opacity:.3;
  position: fixed;
  z-index: 11;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
}
.dialog-content{
  width:500px;
  position:fixed;
  overflow: auto;
  background:#fff;
  top:20%;
  left:50%;
  margin-left: -250px;
  z-index: 12;
  border:#666 solid 2px;
  border-radius: 5px;
  padding: 20px;
  line-height: 30px;
}
.dialog-close{
  position:absolute;
  right:10px;
  top:0px;
  color: #333;
  cursor:pointer;
}
.dialog-close:hover{
  color:red;
}
.button{
  display:block;
  float:left;
  padding:0px 10px;
  height:30px;
  line-height: 30px;
  background:#2fa8e6;
  color:#fff;
  border:0;
  border-radius: 3px;
  cursor:pointer;
}
.button:hover{
  background:#1789c3;
}
/*logform*/
.log-form-block{
	display:block;
	clear:both;
	height:30px;
	line-height: 30px;
	font-size: 14px;
}
.log-form-block h2{
	width:150px;
}
.log-form-block p{
	font-size: 12px;
	color:red;
}
.log-inp{
	border:#ccc solid 1px;
	margin-top: 2px;
	height:25px;
	line-height: 25px;
	margin-right: 5px;
}
/*content*/
.index-left-block{
  background:#f4f4f4;
  border:#e9e9ef solid 1px;
  height:650px;
}
.index-left-block h2{
  color:#2fa8e6;
  height:50px;
  line-height: 50px;
  font-size: 16px;

}
.product-detail-title{
  border-bottom:#2fa8e6 solid 2px;
}
.pro-tit{
  height:30px;
  line-height: 30px;
  font-size: 14px;
  font-weight:bold;
}
.pro-det{ 
  height:50px;
  line-height: 50px;
}
.pro-det a{
  color:#333;
  display:block;
  font-size: 14px;
  width:150px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.pro-det:hover,.pro-det.active{
  background:#2fa8e6;
}
.pro-det:hover a,.pro-det.active a{
  color:#fff;
}
/*dialog*/
.dialog-wrap{
  position: fixed;
  width:100%;
  height:100px;
  z-index: 10;
}
.dialog-cover{
  background: #000;
  opacity:.3;
  position: fixed;
  z-index: 11;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
}
.dialog-content{
  width:500px;
  position:fixed;
  overflow: auto;
  background:#fff;
  top:20%;
  left:50%;
  margin-left: -250px;
  z-index: 12;
  border:#333 solid 2px;
  padding: 20px;
  line-height: 30px;
}
.dialog-close{
  position:absolute;
  right:10px;
  top:0px;
  color: #333;
  cursor:pointer;
}
.dialog-close:hover{
  color:red;
}
</style>
