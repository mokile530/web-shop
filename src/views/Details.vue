<template>
  <div class="details">
    <div class="zoom-box">
      <img-zoom
        class="zoom"
        :src="picture"
        width="500"
        height="500"
        :bigsrc="picture"
        :configs="configs"
      ></img-zoom>
    </div>
    <div class="info">
      <h2>{{name}}</h2>
      <span class="des">{{descriptions}}</span>
      <hr>
      <span class="price">￥{{price}}元</span>
      <hr>
      <span class="serve">烧友服务：满99元包邮</span>
      <div class="buy-box">
        <span class="count">数量：</span>
        <div class="count-box">
          <!-- <a class="count-minus">-</a> -->
          <el-button @click="minus" class="count-minus">-</el-button>
          <input class="txt-count" type="text" v-model="count">
          <el-button @click="add" class="count-add">+</el-button>
          <!-- <a class="count-add">+</a> -->
        </div>
        <el-button @click="intoCartHandle" class="btn-intoCart" type="danger">加入购物车</el-button>
      </div>
      <div class="other">
        <span class="txt-bottom">温馨提醒：</span>
        <span class="txt-bottom">1. 一般情况下，16:00前付款的订单会在当日发出</span>
        <span class="txt-bottom">2. 优惠券信息请以结算页为准</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { path } from "../service/path.js";
import imgZoom from "vue2.0-zoom";
export default {
  data() {
    return {
      id: "",
      type: "mouse",
      picture: "",
      name: "",
      descriptions: "",
      price: "",
      configs: {
        width: 150,
        height: 150,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: "white",
        maskOpacity: 0.2
      },
      count: 1,
      uid:'',
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.type = this.$route.query.type;
    this.uid = localStorage.getItem('token')
    axios
      .get(`${path}api/admin/getOne?type=${this.type}&id=${this.id}`)
      .then(data => {
        this.picture = data.data.list.picture;
        this.name = data.data.list.name;
        this.descriptions = data.data.list.descriptions;
        this.price = data.data.list.price;
      });
     
  },
  methods: {
    /* 减按钮事件 */
    minus() {
      this.count--;
      if(this.count <= -1) {
        this.count = 0;
        this.$message({
          message: '不能再少了哦',
          type: 'error'
        })
      }
    },
    /* 加按钮事件 */
    add() {
      this.count++;
    },
    /* 添加购物车按钮事件 */
    intoCartHandle() {
      if(!localStorage.getItem('token')) {
        this.$message({
          message: '您还未登录哦',
          type: 'error'
        })
        return false;
      }
      axios.post(`${path}cart/modify_cart`,{
        type: this.type,
        uid: this.uid,
        gid: this.id,
        quantity: this.count
      })
        .then(data => {
          if(data.data.status == 'success') {
            console.log(data.data)
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          }
        })
    }
  },
  name: "App",
  components: { imgZoom }
};
</script>

<style scoped>
.details {
  background-color: #fff;
  position: relative;
}
.zoom-box {
  margin: 0 auto;
  position: absolute;
  overflow: hidden;
  min-height: 500px;
  border: 1px solid #333;
  width: 32.6%;
  top: 50px;
  left: 150px;
}
.zoom {
  position: absolute;
}
._magnifier_layer {
  margin-left: 50px;
}
.info {
  float: right;
  width: 29%;
  height: 470px;
  background-color: #fff;
  margin: 50px 150px 0 0;
  padding: 30px 60px 0;
}
h2 {
  /* text-align: center; */
  line-height: 50px;
}
.des {
  display: block;
  font-size: 16px;
  color: rgb(241, 85, 85);
  font-weight: bold;
  /* text-align: center; */
  line-height: 50px;
}
.price {
  display: block;
  font-size: 24px;
  color: rgb(241, 85, 85);
  font-weight: bold;
  /* text-align: center; */
  line-height: 50px;
}
.serve {
  display: block;
  /* text-align: center; */
  font-size: 18px;
  color: #333;
  line-height: 50px;
}
.buy-box {
  line-height: 50px;
}
.count {
  font-size: 17px;
  font-weight: bold;
  display: block;
  float: left;
}
.count-box {
  padding-top: 5px;
}
.count-minus,
.count-add {
  width: 1px;
  height: 14px;
  line-height: 1px;
  padding: 15px;
  font-size: 24px;
  text-indent: -5px;
  margin: 5px 10px 0;
  float: left;
}
.txt-count {
  width: 30px;
  height: 25px;
  display: block;
  float: left;
  margin-top: 5px;
  text-align: center;
}
.btn-intoCart {
  margin-left: 8%;
}
.other {
  margin-top: 30px;
}
.txt-bottom {
  display: block;
  margin-bottom: 8px;
  color: #666;
  width: 100%;
  height: 17px;
}
</style>
