<template>
	<div class="home">
		<!-- 轮播图 -->
		<el-carousel :interval="4000" arrow="hover" trigger="click" height="500px">
			<el-carousel-item v-for="item in pic_list" :key="item">
				<img class="carousel-item" :src="item">
			</el-carousel-item>
		</el-carousel>
		<!-- 部分商品展示1 -->
		<div class="goods-show1">
			
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      pic_list: [
        "http://gwjyhs.com/t6/702/1557397564x2728286407.jpg",
        "http://gwjyhs.com/t6/702/1557397607x2728286407.jpg",
        "http://gwjyhs.com/t6/702/1557397643x2728286407.jpg",
        "http://gwjyhs.com/t6/702/1557398736x2728287343.jpg",
        "http://gwjyhs.com/t6/702/1557398754x2728287343.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.home {
  background: #fff;
}
.el-carousel__item:nth-child(2n) {
  background-color: #000;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #000;
}
.carousel-item {
  display: inline-block;
  margin: 2% 5%;
  width: 90%;
  height: 100%;
}
</style>
