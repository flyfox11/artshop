<template>
  <div class="footer-container">
    <div class="footer-nav">
      <a class="nav-item" href="#">首页</a><span class="splash">|</span>
      <a class="nav-item" href="#">联系我们</a><span class="splash">|</span>
      <a class="nav-item" href="#">隐私条款</a><span class="splash">|</span>
      <a class="nav-item" href="#">法律声明</a><span class="splash">|</span>
      <a class="nav-item" href="#">常见问题</a><span class="splash">|</span>
      <a class="nav-item" href="#">售后服务</a><span class="splash">|</span>
      <a class="nav-item" href="#">防伪查询</a><span class="splash">|</span>
      <a class="nav-item" href="#">加入收藏</a>
    </div>
    <div class="footer-bottom">
      <span class="bottom-item">Copyright © 2018-2050</span>
      <span class="bottom-item">版权所有shuhua.com</span>
      <span class="bottom-item">客服电话：400-1868-333</span>
    </div>
  </div>

</template>


<script>


  export default {
    name: 'comFooter',
    components: {

    },
    data() {
      return {


      }
    },
    computed: {

    },

    methods:{

    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../assets/less/index.less";

  .footer-container{
    width: 100%;
    height: 116px;
    background: @color-black;
    color: @color-grey;
    .footer-bottom{
      height: 50px;
      line-height: 50px;
      background-color: @color-black;
      text-align:center;
      .bottom-item{
        margin: 0 20px;
      }
    }
    .footer-nav{
      height: 66px;
      line-height: 66px;
      text-align: center;
      .nav-item{
        color:@color-white;
        &:hover{
          color:@color-gold;
        }
      }
      .splash{
        margin:0 10px;
      }
    }
  }
</style>

