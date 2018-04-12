<template>
    <div>
      <banner></banner>
      <recommend></recommend>
      <art :arts="arts"></art>
      <com-article :articleObj="articleObj"></com-article>
    </div>
</template>
<script type="text/ecmascript-6">
  import recommend from 'com/recommend';
  import banner from 'com/banner';
  import ArtItem from 'com/artitem';
  import ArtSection from 'com/artsection';
  import art from 'com/art';
  import ComArticle from 'com/comarticle';
  export default {
    name: 'Index',
    data (){
      return {
        arts:[
          {
            sectionUrl:'section1.jpg',
            mark:{
              markUrl:'landscape.jpg',
              moreLink:'javascript:;',
              markName:'山水专栏',
            },
            artList:Array.from({ length: 8 }).map(()=> {return {imgUrl:'landscape-item.jpg',name:'谷茜《翠鸟》',usage:'适用各场合挂画',price:'8500',link:'javascript:;'}})
          },
          {
            sectionUrl:'section2.jpg',
            mark:{
              markUrl:'calligraphy.jpg',
              moreLink:'javascript:;',
              markName:'花鸟专栏',
            },
            artList:Array.from({ length: 8 }).map(()=> {return {imgUrl:'landscape-item.jpg',name:'庞月妙《清风雅韵》',usage:'适用各场合挂画',price:'8500',link:'javascript:;'}})
          },
          {
            sectionUrl:'section3.jpg',
            mark:{
              markUrl:'landscape.jpg',
              moreLink:'javascript:;',
              markName:'书法专栏',
            },
            artList:Array.from({ length: 8 }).map(()=> {return {imgUrl:'landscape-item.jpg',name:'刘永红《唯美家风》',usage:'适用各场合挂画',price:'8500',link:'javascript:;'}})
          },
        ],
        articleObj:{
          moreImgUrl:'landscape-item.jpg',
          moreLink:'javascript:;',
          articleList:[
            {
              title:'装饰指南',
              contents:[
                {link:'javascript:;',name:'如何区分书画宣纸是生宣还是熟宣？'},
                {link:'javascript:;',name:'版画如何收藏？'},
                {link:'javascript:;',name:'客厅想挂幅字,写什么内容好？'},
                {link:'javascript:;',name:'书画如何退款？'}
              ]
            },
            {
              title:'送礼技巧',
              contents:[
                {link:'javascript:;',name:'如何区分书画宣纸是生宣还是熟宣？'},
                {link:'javascript:;',name:'版画如何收藏？'},
                {link:'javascript:;',name:'客厅想挂幅字,写什么内容好？'},
                {link:'javascript:;',name:'书画如何退款？'}
              ]
            },
            {
              title:'全民收藏',
              contents:[
                {link:'javascript:;',name:'如何区分书画宣纸是生宣还是熟宣？'},
                {link:'javascript:;',name:'版画如何收藏？'},
                {link:'javascript:;',name:'客厅想挂幅字,写什么内容好？'},
                {link:'javascript:;',name:'书画如何退款？'}
              ]
            }
          ]
        }
      }
    },
    components: {
      recommend,
      banner,
      art,
      ComArticle
    }
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>
