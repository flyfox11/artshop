<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="item in banners" :key="item.title">
      <img :src="require(`../assets/img/${item.url}`)" alt="">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-prev_orange is_desktop" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-next_orange is_desktop" slot="button-next"></div>
  </swiper>
</template>


<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carrousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        banners:[
          {title:"图一",url:'1.jpg'},
          {title:"图二",url:'2.jpg'},
          {title:"图三",url:'3.jpg'},
        ],
        swiperOption: {
          autoplay:{
            delay: 3000,
            disableOnInteraction: false,
          },
          effect : 'fade',
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
            dynamicBullets:true
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

//      this.swiper.slideTo(3, 1000, false)
    },
    methods:{
      callback(){

      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../assets/less/index.less";
  .swiper-slide{
    text-align:center;
    img{
      width: 1200px;
    }
  }
  .swiper-container-horizontal{
    &> .swiper-pagination-bullets{
      &.swiper-pagination-bullets-dynamic {
        .swiper-pagination-bullet-active{
          background-color: @color-gold;
        }
      }
    }
  }
  .swiper-button-prev_orange{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ec9c07'%2F%3E%3C%2Fsvg%3E") !important;
  }
  .swiper-button-next_orange {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ec9c07'%2F%3E%3C%2Fsvg%3E") !important;
  }
  @media (max-width: 768px){
    .swiper-slide{
      text-align:center;
      img{
        width: 100%;
      }
    }
  }
</style>
