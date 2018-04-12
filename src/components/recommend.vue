<template>
  <div>
    <div class="recommend is_desktop">
      <div class="recommend-left fl">
        <div class="mark-title">精选专题</div>
        <div class="mark-item" v-for="item in recommend.marks">
          <img :src="require(`../assets/img/${item.imgUrl}`)" :alt="item.name">
          <div class="mark-name"><a :href="item.link">{{item.name}}</a></div>
        </div>
      </div>
      <div class="recommend-right fr">
        <div class="recommend-nav">
          <div class="nav-item" v-for="(nav,index) in recommend.navs" @mouseenter="hoverHandler(index)">
            <a class="nav-link" :class="{active:index==activeIndex}" :href="nav.navLink">{{nav.title}}</a>
          </div>

        </div>
        <div class="recommend-content">
          <transition-group name="fade" tag="div">
            <div class="content-list"  v-for="(itemList,index) in recommend.contents" :key="index" v-show="index==activeIndex">
              <div class="content-item" v-for="item in itemList">
                <a :href="item.link" class="img-link">
                  <img :src="require(`../assets/img/${item.imgUrl}`)" :alt="item.name">
                </a>
                <p class="item_name"><a :href="item.link">{{item.name}}</a></p>
                <p class="price">本站价: <span class="price_num">￥{{item.price}}</span></p>
                <div class="view-wrapper">
                  <a :href="item.link" class="view">
                    {{item.desp}}
                  </a>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <div class="recommend is_app clearfix">
      <div class="rec-item fl" v-for="(item,index) in recommend.navs">
        <a class="rec-item-inner" :href="item.navLink">
          <i class="iconfont" :class="['icon-'+icons[index]]"></i>
          <span class="rec-name">{{item.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'recommend',
    props:{

    },
    data (){
      return {
        icons:['odds','newarrival','sellerhot','collection'],
        activeIndex:0,
        recommend:{
          marks:[
            {imgUrl:'m1.jpg',link:'javascript:;',name:'凌雪花鸟画作品精选'},
            {imgUrl:'m2.jpg',link:'javascript:;',name:'苗雨绘画艺术专题'}
          ],
          navs:[
            {title:'今日特惠',navLink:'javascript:;'},
            {title:'新品上市',navLink:'javascript:;'},
            {title:'热销推荐',navLink:'javascript:;'},
            {title:'精品收藏',navLink:'javascript:;'}
          ],
          contents:[
            [
              {link:'javascript:;',imgUrl:'recommend-item1.jpg',name:'王永刚《龙之子孙》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item1.jpg',name:'王永刚《龙之子孙》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item1.jpg',name:'王永刚《龙之子孙》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item1.jpg',name:'王永刚《龙之子孙》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item1.jpg',name:'王永刚《龙之子孙》',price:1800,desp:'著名青年油画家,布面油画'}
            ],
            [
              {link:'javascript:;',imgUrl:'recommend-item2.jpg',name:'肖映梅《明珠如綴》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item2.jpg',name:'肖映梅《明珠如綴》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item2.jpg',name:'肖映梅《明珠如綴》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item2.jpg',name:'肖映梅《明珠如綴》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item2.jpg',name:'肖映梅《明珠如綴》',price:1800,desp:'著名青年油画家,布面油画'}
            ],
            [
              {link:'javascript:;',imgUrl:'recommend-item3.jpg',name:'姚宏宇《自得安详》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item3.jpg',name:'姚宏宇《自得安详》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item3.jpg',name:'姚宏宇《自得安详》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item3.jpg',name:'姚宏宇《自得安详》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item3.jpg',name:'姚宏宇《自得安详》',price:1800,desp:'著名青年油画家,布面油画'}
            ],
            [
              {link:'javascript:;',imgUrl:'recommend-item4.jpg',name:'杨铭昌《旭日东升》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item4.jpg',name:'杨铭昌《旭日东升》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item4.jpg',name:'杨铭昌《旭日东升》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item4.jpg',name:'杨铭昌《旭日东升》',price:1800,desp:'著名青年油画家,布面油画'},
              {link:'javascript:;',imgUrl:'recommend-item4.jpg',name:'杨铭昌《旭日东升》',price:1800,desp:'著名青年油画家,布面油画'}
            ]
          ]
        }
      }
    },
    methods:{
      hoverHandler(index){
        this.activeIndex=index;
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  @import "../assets/less/index.less";
  .recommend{
    width: 1200px;
    height: 248px;
    margin: 0px auto;
    .recommend-left{
      width: 300px;
      height: inherit;
      border: solid 1px @color-grey01;
      border-top:solid 2px @color-red;
      box-sizing: border-box;
      .mark-title{
        background-color: @color-grey02;
        height: 28px;
        line-height: 28px;
        padding-left: 20px;
        position: relative;
        .font-bold();
        &::before{
          content: '';
          display: block;
          position: absolute;
          top:-1px;
          left:-1px;
          border: solid 7px @color-red;
          border-right-color: @color-grey02;
          border-bottom-color: @color-grey02;
        }
      }
      .mark-item{
        width: 276px;
        height: 89px;
        padding: 5px;
        margin: 5px;
        border: solid 1px @color-grey01;
        img{
          height: 64px;
          width: inherit;
          vertical-align: middle;
        }
        .mark-name{
          text-align: center;
          line-height: 30px;
          .font-14();
          a{
            color: @color-grey;
            &:hover{
              text-decoration: underline;
              color:@color-red-hover;
            }
          }
        }
      }
    }
    .recommend-right{
      border:solid 1px @color-grey01;
      .recommend-nav{
        height: 30px;
        width: 873px;
        .font-0();
        border-bottom: solid 1px @color-grey01;
        .nav-item{
          width: 218px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          .font-16();
          cursor: pointer;
          border-right: 1px solid @color-grey01;
          box-sizing: border-box;
          position: relative;
          &:last-child{
            border-right:none;
            width: 219px;
          }
          .nav-link{
            display: inline-block;
            width: inherit;
            height: inherit;
            position: absolute;
            top:0;
            left:0;
            z-index: 33;
            color:@color-black;
            box-sizing: border-box;
            &.active{
              color: @color-red;
              border-top: solid 2px @color-red;
              margin-top: -1px;
              height: 33px;
              border-bottom: @color-white 2px solid;

            }
          }
        }
      }
      .recommend-content{
        height: 215px;
        overflow: hidden;
        .fade-enter, .fade-leave {
          opacity: 0;
        }
        .content-list{
          transition: opacity .3s linear;
          height: inherit;
          .font-0();
          .content-item{
            display: inline-block;
            .font-14();
            width: 174px;
            height: 195px;
            margin: 10px 0;
            text-align: center;
            border-right: 1px solid @color-grey01;
            box-sizing: border-box;
            position: relative;
            &:last-child{
              border-right: none;
              .view-wrapper{
                width: 178px;
              }
            }
            &:hover{
              .view-wrapper{
                height: 40px;
                opacity: 1;
              }
            }
            .view-wrapper{
              position: absolute;
              bottom: -10px;
              left: 0;
              z-index: 3;
              height: 0px;
              opacity: 0;
              width: inherit;
              background: @color-gold;
              line-height: 40px;
              text-align: center;
              transition: all .2s linear;
              .view{
                color:@color-white;
              }
            }
            img{
              height: 136px;
            }
            p{
              margin: 0;
              color:@color-grey;
            }
            a{
              color:@color-grey;
              &:hover{
                color: @color-red;
                text-decoration: underline;
              }
            }
            .item_name{
              margin-top: 6px;
            }
            .price{
              .price_num{
                color: @color-red;
                .font-bold();
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px){
    .recommend{
      width: 100%;
      height: 80px;
      .rec-item{
        width: 25%;
        height: inherit;
        line-height: 80px;
        text-align: center;
        &-inner{
          display: inline-block;
          vertical-align: middle;
          line-height: normal;
          color:@color-gold01;
          .iconfont{
            .font-32();
          }
          .rec-name{
            display: block;
            .font-14();
            margin-top: 4px;
          }
        }

      }
    }
  }
</style>
