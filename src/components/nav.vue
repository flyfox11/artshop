<template>
    <div class="nav is_desktop">
        <ul class="nav-ul clearfix">
            <li v-for="item in list" class="nav-li fl">
                <a :href="item.link" class="nav-a">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    name: 'Nav',
    data (){
      return {
        list:[
            {link:'#',name:'首页'},
            {link:'#',name:'山水画'},
            {link:'#',name:'花鸟画'},
            {link:'#',name:'动物画'},
            {link:'#',name:'书法作品'},
            {link:'#',name:'定制专区'},
            {link:'#',name:'选画技巧'},
        ]
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>
    @import "../assets/less/index.less";
    .nav{
        height: 45px;
        background-color:@color-red;
        .nav-ul{
            padding:0;
            width: 1050px;
            margin: 0 auto;
            list-style: none;
            .nav-li{
                width: 150px;
                height: 45px;
                line-height: 45px;
                text-align:center;
                .nav-a{
                    display: block;
                    color:@color-white;
                    transition: all .3s linear;
                  &:hover{
                      background-color: @color-gold;
                    }
                }
            }
        }
    }

</style>
