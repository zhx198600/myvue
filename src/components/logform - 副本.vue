<template>
  <div class="log-form mar_tb2">
    <div class="log-form-block">
      <h2 class="fl tar">用户名：</h2>
      <input v-model="logUser" type="text" class="log-inp fl" placeholder="请输入用户名">
      <p class="fl">{{userErrors.errorText}}</p>
    </div>
    <div class="log-form-block">
      <h2 class="fl tar">密码：</h2>
      <input v-model="logPass" type="password" class="log-inp fl" placeholder="请输入密码">
      <p class="fl">{{passErrors.errorText}}</p>
    </div>
    <div class="log-form-block mar_t">
      <h2 class="fl tar">&nbsp;</h2>
      <input @click="onLogin" class="button" type="submit" value="登录" />
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
      logUser:'',
      logPass:'',
      errorText:''
    }
  },
  methods:{
    onLogin(){
        this.errorText=''
        this.$http.get('api/user')
        .then((res)=>{
          //console.log(res.data)
          let i=0
          for(i=0;i<res.data.length;i++){
            if(res.data[i].userName===this.logUser && res.data[i].password===this.logPass){
              this.$emit('has-log',this.logUser)
            }
            else{
              this.errorText='部分选项未通过'
            }             
          }
        },(error)=>{
          console.log(error)
        })
      //console.log(this.logUser,this.logPass)
    }
  },
  computed:{
    userErrors(){
      let errorText,status
      if(!/@/g.test(this.logUser)){
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
      if(!/^\w{1,6}$/g.test(this.logPass)){
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
