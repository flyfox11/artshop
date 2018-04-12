<template>
  <div class="section">
    <a href="javascript:;">
      <img :src="require(`../assets/img/${sectionUrl}`)">
    </a>
  </div>
</template>
<script>
  export default {
    name: 'ArtSection',
    props:{
      sectionUrl:{
        type:String,
        default:''
      }
    },
    data (){
      return {

      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  .section{
    width: 1200px;
    margin: 0px auto;
    img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }
</style>
