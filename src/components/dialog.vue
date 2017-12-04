<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeMyself">×</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
props:{
  isShow: {
    type:Boolean,
    default:false
  }
},
methods:{
  closeMyself(){
    this.$emit('on-close')
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drop-enter-active{
  transition:all .5s ease;
}
.drop-leave-active{
  transition:all .3s ease;
  transform:translateY(-500px);
}
.drop-enter{
  transform:translateY(-500px);
}
</style>
