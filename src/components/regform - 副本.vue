<template>
  <div class="log-form mar_tb2">
    <div class="log-form-block">
      <h2 class="fl tar">用户名：</h2>
      <input v-model="regUser" type="text" class="log-inp fl" placeholder="请输入用户名">
      <p class="fl">{{userErrors.errorText}}</p>
    </div>
    <div class="log-form-block">
      <h2 class="fl tar">密码：</h2>
      <input v-model="regPass" type="password" class="log-inp fl" placeholder="请输入密码">
      <p class="fl">{{passErrors.errorText}}</p>
    </div>
    <div class="log-form-block">
      <h2 class="fl tar">再次输入密码：</h2>
      <input v-model="regPassSec" type="password" class="log-inp fl" placeholder="请重新输入密码">
      <p class="fl">{{secPassErrors.errorText}}</p>
    </div>
    <div class="log-form-block mar_t">
      <h2 class="fl tar">&nbsp;</h2>
      <input @click="onReg" class="button" type="submit" value="注册" />
      <input class="button mar_l" type="button" value="取消" />
    </div>
    <div class="log-form-block">
      <h2 class="fl tar">&nbsp;</h2>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      regUser:'',
      regPass:'',
      regPassSec:'',
      errorText:''
    }
  },
  methods:{
    onReg(){
        this.errorText=''
        this.$http.get('api/user')
        .then((res)=>{
          this.$emit('reging',res.data,this.regUser,this.regPass)
        },(error)=>{
          console.log(error)
        })
      //console.log(this.regUser,this.regPass)
    }
  },
  computed:{
    userErrors(){
      let errorText,status
      if(!/@/g.test(this.regUser)){
        status=false
        errorText="不包含@"
      }
      else{
        status=true,
        errorText=''
      }
      if(!this.userFlag){
        errorText=''
        this.userFlag=true
      }
      return{
        status,
        errorText
      }
    },
    passErrors(){
      let errorText,status
      if(!/^\w{1,6}$/g.test(this.regPass)){
        status=false
        errorText="密码不是1~6位"
      }
      else{
        status=true,
        errorText=''
      }
      if(!this.passFlag){
        errorText=''
        this.passFlag=true
      }
      return{
        status,
        errorText
      }
    },
    secPassErrors(){
      let errorText,status
      if(this.regPass!==this.regPassSec && this.regPassSec!==''){
        status=false
        errorText="两次输入密码不一样"
      }
      else{
        status=true,
        errorText=''
      }
      if(!this.passFlag){
        errorText=''
        this.passFlag=true
      }
      return{
        status,
        errorText
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
