<template>
    <div>
      <div v-for="art in arts">
        <art-item :mark="art.mark" :artList="art.artList"></art-item>
        <art-section :sectionUrl="art.sectionUrl" class="is_desktop"></art-section>
      </div>
    </div>
</template>
<script>
  import ArtItem from 'com/artitem';
  import ArtSection from 'com/artsection';
  export default {
    name: 'art',
    props:{
      arts:{
        type:Array,
        default:[]
      }
    },
    data (){
      return {
      }
    },
    components: {
      ArtItem,
      ArtSection
    }
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>
