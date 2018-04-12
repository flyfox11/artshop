<template>
  <div class="landscape">
    <div class="landscape-left">
      <a :href="mark.moreLink">
        <img :src="require(`../assets/img/${mark.markUrl}`)"  :alt="mark.markName" class="landscape-img">
      </a>
      <div class="mark-name is_desktop"><span>{{mark.markName}}</span> <a :href="mark.moreLink">查看更多>></a></div>
    </div>
    <div class="landscape-content clearfix">
      <div class="landscape-content-item fl"  v-for="item in artList">
        <a :href="item.link" class="landscape-item-link">
          <img :src="require(`../assets/img/${item.imgUrl}`)" :alt="item.name">
        </a>
        <div class="landscape-item-name">
          <span class="item_name">{{item.name}}</span>
          <span class="usage">{{item.usage}}</span>
          <span class="price">价格：<b>{{item.price | format}}</b></span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'ArtItem',
    props:{
      mark:{
        type:Object
      },
      artList:{
        type:Array
      }
    },
    data (){
      return {

      }
    },
    filters: {
      format (val) {
        val += '';
        return '￥' + val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    },
  }
</script>


<style lang="less" rel="stylesheet/less">
  @import "../assets/less/index.less";
  .landscape{
    position:relative;
    width: 1200px;
    margin:0 auto;
    height: 380px;
    .landscape-left{
      width: 300px;
      height: 360px;
      position:absolute;
      left:0;
      top:10px;
      overflow: hidden;
      .mark-name{
        text-align: center;
        color:@color-grey;
        height: 40px;
        line-height: 40px;
        .font-20();
        .font-bold();
        box-sizing: border-box;
        border:1px solid @color-gold;
        position: relative;
        span{
          font-family: 'souhua3';
        }
        a{
          position: absolute;
          right: 0;
          .font-12();
          color:@color-grey;
          &:hover{
            color: @color-red-hover;
          }
        }
      }
      img{
        height: 320px;
        vertical-align: middle;
      }
    }
    .landscape-content{
      position:absolute;
      left:300px;
      top:0px;
      .landscape-content-item{
        width: 200px;
        height: 170px;
        margin:10px 0px 10px 25px;
        border: 1px solid @color-grey01;
        box-sizing: border-box;
        transition: border .3s linear;
        &:hover{
          border:solid 1px @color-red-hover;
          img{
            transform: scale(1.1);
            opacity: .8;
          }
        }
        .landscape-item-link{
          width: 100%;
          height: 104px;
          display: inline-block;
          overflow: hidden;
          img{
            width: inherit;
            height: inherit;
            transition: all .3s linear;
          }
        }
        .landscape-item-name{
          text-align: center;
          span{
            display: block;
            .font-14();
            &.usage{
              color:@color-grey;
            }
            &.price{
              color:@color-red;
            }
            &.item_name{
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px){
    .landscape{
      width: 100%;
      height: auto;
      .landscape-left{
        width: inherit;
        height: 150px;
        position: static;
        img{
          width: 100%;
          height: auto;
        }
      }
      .landscape-content{
        position:static;
        .landscape-content-item{
          width: 48%;
          margin:1%;
        }
      }
    }
  }
</style>
