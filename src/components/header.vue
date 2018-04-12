<template>
    <div class="header clearfix">
      <div class="header-left fl clearfix">
        <img class="fl" src="../assets/img/logo.jpg" alt="搜画网"/>
        <h1 class="fl">搜画网</h1>
      </div>
      <div class="header-title fl is_desktop">
        <h3>{{goal}}</h3>
      </div>
      <div class="header-tel fr">
        <div class="tel-wrapper">
          <i class="iconfont icon-phone"></i>
          <span>热线电话</span><br/>
          <span class="tel">400-1868-333</span>
        </div>
      </div>
        <!--<h1>{{msg}}</h1>-->
    </div>
</template>
<script>
  export default {
    name: 'Header',
    data (){
      return {
        goal: '搜画，让艺术近在咫尺',
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>
  @import "../assets/less/index.less";


  .header{
       width: 1200px;
       height:100px;
       line-height:100px;
       margin:0 auto;
       position:relative;
      .header-left{
         img{
           height: 100px;
         }
         h1{
           margin:0;
           .font-32();
           .font-rest();
           font-family: 'souhua2';
         }
      }
     .header-title{
       .font-28();
       position: absolute;
       width: 380px;
       left:50%;
       margin-left:-190px;
       text-align: center;
       h3{
         display: inline;
         .font-rest();
         font-family: 'souhua1';
       }
     }
     .header-tel{
       .font-18();
       .tel-wrapper{
         line-height: initial;
         display: inline-block;
         text-align:center;
         vertical-align:middle;
        .tel{
          .font-bold();
         }
       }
     }
   }
  @media (max-width: 768px){
    .header{
      width: 100%;
      height: 64px;
      line-height: 64px;
      .header-left{
        padding-left: 10px;
        img{
          height: 60px;
        }
        h1{
          .font-28();
        }
      }
      .header-tel{
        padding-right: 10px;
        .font-16();
      }
    }

  }
</style>
