<template>
  <div class="header_container">
    <el-breadcrumb class="header-contour" separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    
  </div>
</template>

<script>
export default {
  name: 'HeadTop',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.header_container{
    display: flex;
		flex: 0 0 50px;
    /* align-content: space-between; */
		align-items: center;
		padding-left: 20px;
    background-color: rgb(238, 241, 246);
	}
  .header-contour{
    align-items: center;
  }
</style>
