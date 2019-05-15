<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" arrow="hover" trigger="click" height="500px">
      <el-carousel-item v-for="item in pic_list" :key="item">
        <img class="carousel-item" :src="item">
      </el-carousel-item>
    </el-carousel>
    <!-- 部分商品展示1 鼠标 -->
    <div class="goods-show1">
      <h1 class="goods-title">精品鼠标</h1>
      <li class="item-show1" v-for="item in show1" :key="item.title">
        <img class="pic-size" :src="item.pic" alt="">
        <div class="cover"></div>
        <span class="item-show1-title">{{item.title}}</span>
        <router-link :to="{ path: `list/${item.id}`, query: { type:item.type } }">
          <a class="btn-show1">立即购买</a>
        </router-link>
      </li>
    </div>
    <!-- 部分商品展示2 键盘 -->
    <div class="goods-show1">
      <h1 class="goods-title">精品键盘</h1>
      <li class="item-show1" v-for="item in show2" :key="item.title">
        <img class="pic-size" :src="item.pic" alt="">
        <div class="cover"></div>
        <span class="item-show1-title">{{item.title}}</span>
        <router-link :to="{ path: `list/${item.id}`, query: { type:item.type } }">
          <a class="btn-show1">立即购买</a>
        </router-link>
      </li>
    </div>
    <!-- 部分商品展示3 耳机 -->
    <div class="goods-show1">
      <h1 class="goods-title">精品耳机</h1>
      <li class="item-show1" v-for="item in show3" :key="item.title">
        <img class="pic-size" :src="item.pic" alt="">
        <div class="cover"></div>
        <span class="item-show1-title">{{item.title}}</span>
        <router-link :to="{ path: `list/${item.id}`, query: { type:item.type } }">
          <a class="btn-show1">立即购买</a>
        </router-link>
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
      /* 鼠标 */
      show1: [
        {
          pic:
            "https://img10.360buyimg.com/n7/jfs/t7423/291/1105653741/97928/b3830364/599a8becNac58f426.jpg",
          title: "雷蛇（Razer）锐蝮蛇竞技版-枪灰色",
          id: "5cd6522e33564b4fd48811e3",
          type: "mouse"
        },
        {
          pic:
            "https://img13.360buyimg.com/n7/jfs/t1/18850/36/2370/116969/5c1c5127Ebdb951fc/91ea7cea8bc4f968.jpg",
          title: "达尔优（dareu）EM905橙光版鼠标",
          id: "5cd6547f33564b4fd48811f3",
          type: "mouse"
        },
        {
          pic:
            "https://img10.360buyimg.com/n7/jfs/t14086/143/413523696/153409/53813be1/5a0b9c43Nd8a926ee.jpg",
          title: "雷柏（Rapoo） MT550 蓝牙多模式无线鼠标",
          id: "5cd652d233564b4fd48811e7",
          type: "mouse"
        }
      ],
      /* 键盘 */
      show2: [
        {
          pic:
            "https://img10.360buyimg.com/n7/jfs/t1/4637/11/2342/336923/5b964845E6f28429b/02272f468fceb834.jpg",
          title: "狼蛛（AULA）F2088混光 朋克机械键盘",
          id: "5cd68c79db651a3b44513fd6",
          type: "keyboard"
        },
        {
          pic:
            "https://img13.360buyimg.com/n7/jfs/t8158/45/1321492545/213956/183441c3/59b774b7N1bb08386.jpg",
          title: "雷柏（Rapoo） V500PRO 104键混光机械键盘",
          id: "5cd68c93db651a3b44513fd9",
          type: "keyboard"
        },
        {
          pic:
            "https://img12.360buyimg.com/n7/jfs/t1/22050/1/291/265386/5c08b748Ebb74e1fb/72e093ce2711e081.jpg",
          title: "达尔优（dareu）机械师108键机械合金版",
          id: "5cd68cacdb651a3b44513fe0",
          type: "keyboard"
        }
      ],
      /* 耳机 */
      show3: [
        {
          pic:
            "https://img14.360buyimg.com/n7/jfs/t24619/299/534392189/54020/688a5fe6/5b7286fbN4f6d2b9e.jpg",
          title: "兰士顿 D4C耳机入耳式有线降噪隔音四核",
          id: "5cd6b0eedb651a3b44513ff6",
          type: "headphone"
        },
        {
          pic:
            "https://img11.360buyimg.com/n7/jfs/t1/29861/36/11965/55492/5c9352f7E5302d7a8/dd359563dc751ca5.jpg",
          title: "Apple AirPods 配充电盒 苹果蓝牙耳机",
          id: "5cd6b203db651a3b44513ffe",
          type: "headphone"
        },
        {
          pic:
            "https://img12.360buyimg.com/n7/jfs/t2551/38/808471936/121954/40e10aeb/566a3ea8N925ccd55.jpg",
          title: "雷蛇（Razer）北海巨妖标准版 7.1",
          id: "5cd6b23fdb651a3b44514000",
          type: "headphone"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  background: #eee;
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
  padding: 0 150px 10px;
  background: #eee;
  overflow: hidden;
}
.goods-title {
  margin: 33px 0;
  text-align: center;
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
