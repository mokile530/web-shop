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
      <li class="item-show1" v-for="item in show1" :key="item">
        <img class="pic-size" :src="item.pic" alt="">
        <div class="cover"></div>
        <span class="item-show1-title">{{item.title1}}</span>
        <a class="btn-show1" href="">立即购买</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic_list: [
        "https://s2.ax1x.com/2019/05/10/E2Hb5D.jpg",
        "https://s2.ax1x.com/2019/05/10/E2Hob6.jpg",
        "https://s2.ax1x.com/2019/05/10/E2H7VK.jpg",
        "https://s2.ax1x.com/2019/05/10/E2HLPe.jpg",
        "https://s2.ax1x.com/2019/05/10/E2HHUO.jpg"
      ],
      show1: [
        {
          pic:
            "https://img10.360buyimg.com/n7/jfs/t7423/291/1105653741/97928/b3830364/599a8becNac58f426.jpg",
          title1: "雷蛇（Razer）锐蝮蛇竞技版-枪灰色"
        },
        {
          pic:
            "https://img13.360buyimg.com/n7/jfs/t1/18850/36/2370/116969/5c1c5127Ebdb951fc/91ea7cea8bc4f968.jpg",
          title1: "达尔优（dareu）EM905橙光版鼠标"
        },
        {
          pic:
            "https://img10.360buyimg.com/n7/jfs/t7750/213/1612610608/74546/12c4559f/599e8558N6fa684f9.jpg",
          title1: "罗技（G）G603 无线游戏鼠标"
        }
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
.goods-show1 {
  margin: 0 auto 80px;
  padding: 100px 150px;
  background: #eee;
  overflow: hidden;
}
.item-show1 {
  width: 320px;
  height: 320px;
  position: relative;
  float: left;
  margin-left: 80px;
}
.pic-size {
  width: 320px;
  height: 320px;
  border-radius: 5px;
}
.cover {
  width: 320px;
  height: 320px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  visibility: hidden;
}
.item-show1:hover .cover:nth-of-type(n) {
  visibility: visible;
}
.item-show1:hover .btn-show1:nth-of-type(n) {
  visibility: visible;
}
.item-show1:hover .item-show1-title:nth-of-type(n) {
  visibility: visible;
}
.item-show1-title {
  display: block;
  position: absolute;
  top: 35%;
  left: 8%;
  padding: 5px;
  color: rgb(255, 255, 255);
  visibility: hidden;
  z-index: 1;
}
.btn-show1 {
  display: block;
  position: absolute;
  top: 60%;
  left: 38%;
  border: 1px solid #000;
  padding: 5px;
  color: #fff;
  visibility: hidden;
}
.btn-show1:hover {
  background: rgba(100, 100, 100, 0.6);
  color: rgb(233, 200, 16);
}
</style>
