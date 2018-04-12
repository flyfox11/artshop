<template>
  <div class="article is_desktop">
    <div class="article-item" v-for="article in articleObj.articleList">
      <h3>{{article.title}}</h3>
      <div class="article-content">
        <p class="article-content_item" v-for="content in article.contents">
          <a :href="content.link">{{content.name}}</a>
        </p>
      </div>
    </div>
    <div class="article-item article-more">
      <img :src="require(`../assets/img/${articleObj.moreImgUrl}`)"><a :href="articleObj.moreLink">查看更多分类</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ComArticle',
    data (){
      return {
      }
    },
    props:{
      articleObj:{
        type:Object,
        default:{}
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>
  @import "../assets/less/index.less";
  .article{
    width: 1200px;
    margin:0 auto;
    border-top:solid 1px  @color-grey01;
    .font-0();//清除子元素为incline-block之间的空隙
    .article-item{
      width: 300px;
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      .font-16();
      border-right: solid 1px @color-grey01;
      margin:10px 0px;
      border-top: solid 1px @color-grey01;
      border-bottom: solid 1px @color-grey01;
      &:first-child{
        border-left: solid 1px @color-grey01;
      }
      h3{
        height: 18px;
        line-height: 18px;
        margin: 16px 0px;
        text-align: center;
        color:@color-red;
      }
      .article-content{
        padding: 0px 20px;
        .article-content_item{
          line-height: 12px;
          .font-14();
          &::before{
            content: '·';
            color:@color-grey;
            .font-bold();
            padding-right: 5px;
          }
          &:hover{
            &::before,a{
              color: @color-red-hover;
            }
          }
          a{
            color: @color-grey;
          }
        }
      }
    }
    .article-more{
      img{
        width:inherit;
        height: 120px;
        vertical-align: middle;
      }
      a{
        color: @color-grey;
        display: inline-block;
        width: inherit;
        height: 34px;
        line-height: 34px;
        text-align: center;
        &:hover{
          color: @color-red-hover;
        }
      }
    }
  }

</style>
