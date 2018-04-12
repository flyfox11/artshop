<template>
  <div class="footer-container">
    <div class="help-nav is_app">
      <div class="help-content" v-for="item in footerList">
        <a href="#">
          <fieldset>
            <legend>{{item.title}}</legend>
          </fieldset>
        </a>
      </div>
    </div>
    <div class="help-wrapper clearfix  is_desktop">
      <div class="help-left fl clearfix">
        <ul :class="['help-list','fl', 'help-list-'+index]" v-for="(footer, index) in footerList" :style="{background: 'url(require(`../assets/img/${list_bg}`)) 0 3px no-repeat'}">
          <h3>{{footer.title}}</h3>
          <li class="help-item" v-for="item in footer.contents">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="help-right fr">
        <img src="../assets/img/help_code.jpg" alt="">
      </div>
    </div>
    <div class="help-ensure is_desktop">
      <div class="ensure-item-wrapper clearfix">
        <div :class="['ensure-item','fl','ensure-item-'+index]" v-for="(item,index) in ensures">
          <div class="ensure-item_content">
            <span class="ensure-text">{{item.text}}</span>
            <span class="ensure-tip">{{item.tip}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>


  export default {
    name: 'codeFooter',
    components: {

    },
    data() {
      return {
        list_bg:'help_bg.jpg',
        ensures:[
          {text:'100%手绘',tip:'手绘真迹，拒绝印刷品'},
          {text:'7天预约订制',tip:'专属VIP特权'},
          {text:'免费订购',tip:'订购热线：400-060-6790'},
          {text:'货到付款',tip:'覆盖全国1800个城市'},
        ],
        footerList:[
          {
            title:'购物指南',
            contents:[
              {link:'javascript:;', name:'购物流程'},
              {link:'javascript:;', name:'常见问题'},
              {link:'javascript:;', name:'会员注册'},
              {link:'javascript:;', name:'购买方式'},
            ]
          },
          {
            title:'配送方式',
            contents:[
              {link:'javascript:;', name:'快递签收'},
              {link:'javascript:;', name:'配送范围'},
              {link:'javascript:;', name:'物流赠送'},
              {link:'javascript:;', name:'上门自提'},
            ]
          },
          {
            title:'付款方式',
            contents:[
              {link:'javascript:;', name:'网银在线'},
              {link:'javascript:;', name:'银行转账'},
              {link:'javascript:;', name:'支付宝'},
              {link:'javascript:;', name:'货到付款'},
            ]
          },
          {
            title:'售后服务',
            contents:[
              {link:'javascript:;', name:'退款流程'},
              {link:'javascript:;', name:'退换货政策'},
              {link:'javascript:;', name:'售后说明'},
            ]
          },
          {
            title:'关于我们',
            contents:[
              {link:'javascript:;', name:'免责声明'},
              {link:'javascript:;', name:'联系我们'},
              {link:'javascript:;', name:'保真承诺'},
              {link:'javascript:;', name:'关于我们'},
            ]
          }
        ]
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
    width: 1200px;
    margin: 0px auto;
    border-top: @color-red-hover 3px solid;
    padding: 15px 0;
    .help-wrapper{
      .help-left{
        .help-list{
          list-style: none;
          width: 190px;
          min-height: 148px;
          margin: 0;
          padding: 0;
          text-align: center;
          &-0{
            background: url(../assets/img/help_bg.jpg) 0 3px no-repeat;
          }
          &-1{
            background: url(../assets/img/help_bg.jpg) 0 -147px no-repeat;
          }
          &-2{
            background: url(../assets/img/help_bg.jpg) 0 -297px no-repeat;
          }
          &-3{
            background: url(../assets/img/help_bg.jpg) 0 -447px no-repeat;
          }
          &-4{
            background: url(../assets/img/help_bg.jpg) 0 -597px no-repeat;
          }
          h3{
            .font-16();
            margin:8px 0 0;
            padding: 0 0 8px;
          }
          .help-item{
            .font-14();
            line-height: 28px;
            a{
              color:@color-grey;
              &:hover{
                color:@color-red-hover;
              }
            }
          }
        }
      }
      .help-right{
        width: 250px;
        img{
          width: inherit;
          margin-top: 10px;
        }
      }
    }
    .help-ensure{
      width: 1198px;
      height: 58px;
      margin: 10px auto 20px auto;
      border: @color-grey01 1px solid;
      border-radius: 29px;
      background-color: @color-white;
      text-align: center;
      .ensure-item-wrapper{
        height: 58px;
        display: inline-block;
        .ensure-item{
          width: 280px;
          height: inherit;
          border-right: @color-grey01 1px solid;
          box-sizing: border-box;
          position:relative;
          &-0{
            background: url(../assets/img/help_ensure.jpg) 48px 0 no-repeat;
          }
          &-1{
            background: url(../assets/img/help_ensure.jpg) 74px -58px no-repeat;
          }
          &-2{
            background: url(../assets/img/help_ensure.jpg) 35px -116px no-repeat;
          }
          &-3{
            background: url(../assets/img/help_ensure.jpg) 52px -174px no-repeat;
          }
          &:last-child{
            border-right: none;
          }
          .ensure-item_content{
            width: inherit;
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            margin-left: 25px;
            .ensure-tip{
              display: block;
              .font-14();
              color:@color-grey;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px){
    .footer-container{
      border:0;
      width: 100%;
      padding: 0;
      .help-nav{
        padding: 0 1%;
        .help-content{
          text-align: center;
          border: 1px solid @color-grey01;
          margin-bottom: 10px;
          padding: 0 30px;

          a{
            color:@color-gold01;
            fieldset{
              height: 20px;
              line-height: 40px;
              border-color: @color-grey01;
              /*margin: 20px 0 10px;*/
              border-width: 1px 0 0;
              border-style: solid;
              legend{
                .font-14();
                padding: 0 50px;
              }
            }
          }

          &:last-of-type{
            margin-bottom: 5px;
          }
        }
      }
    }
  }
</style>

