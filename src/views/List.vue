<template>
  <div class="list">
    <!-- 种类标签 -->
    <div>
      <fieldset>
        <legend>所有分类</legend>
      </fieldset>
    </div>
    <div class="type-box">
      <el-tag @click="updata_type('mouse')" class="labal">鼠标</el-tag>
      <el-tag @click="updata_type('keyboard')" class="labal" type="success">键盘</el-tag>
      <el-tag @click="updata_type('headphone')" class="labal" type="info">耳机</el-tag>
    </div>
    <!-- 商品列表 -->
    <div class="item-box">
      <ul class="frame">
        <li class="item" v-for="item in list" :key="item._id">
          <router-link :to="{ path: `list/${item._id}`, query: { type:type } }">
            <img class="item-img" :src="item.picture" alt="加载失败" :title="item.picture">
          </router-link>
          <span class="price">￥{{item.price}}</span>
          <p class="title">{{item.name}}</p>
          <p class="des">{{item.descriptions}}</p>
          <!-- 购买&添加购物车按钮 -->
          <router-link class="buy" :to="{ path: `list/${item._id}`, query: { type:type } }">
            <el-button type="primary">立即购买</el-button>
          </router-link>
          <el-button @click="intoCartHandle(item._id)" class="into-cart" type="danger">加入购物车</el-button>
        </li>
      </ul>
    </div>
    <!-- 页码 -->
    <el-pagination
      class="page-number"
      background=""
      layout="total,prev, pager, next,jumper"
      :page-size="15"
      :total="allCount"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { path } from "../service/path";
import axios from "axios";
export default {
  data() {
    return {
      type: "",
      list: [],
      pageCount: 1,
      allCount: 0,
      username: "",
      nickname: "",
      avatar: "",
      admin: false,
      uid: ""
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.logined = true;
      this.uid = localStorage.getItem('token')
      axios
        .post(`${path}user/getInfo`, {
          uid: this.uid
        })
        .then(data => {
          this.nickname = data.data.nickname;
          this.username = data.data.username;
          this.avatar = data.data.avatar;
          this.admin = data.data.admin;
        });
    } else {
      this.logined = false;
    }
  },
  mounted() {
    this.type = this.$route.query.type || "mouse";
    axios
      .get(`${path}api/admin/get_prod?page=${1}&limit=15&type=${this.type}`)
      .then(data => {
        this.list = data.data.info.list;
        this.pageCount = data.data.info.pageCount;
        this.allCount = data.data.info.allCount;
      });
  },
  methods: {
    /* 外设种类 */
    updata_type(type) {
      this.type = type;
      axios
        .get(`${path}api/admin/get_prod?page=${1}&limit=15&type=${this.type}`)
        .then(data => {
          this.list = data.data.info.list;
          this.allCount = data.data.info.allCount;
        });
    },
    /* 页码改变触发的事件 */
    handleCurrentChange(val) {
      axios
        .get(`${path}api/admin/get_prod?page=${val}&limit=15&type=${this.type}`)
        .then(data => {
          this.list = data.data.info.list;
        });
    },
    /* 加入购物车按钮事件 */
    intoCartHandle(gid) {
      axios
        .post(`${path}cart/add_cart`, {
          type: this.type,
          uid: this.uid,
          gid: gid
        })
        .then(data => {
          this.$message({
            message: data.data.info,
            type: data.data.status
          });
        });
    }
  }
};
</script>

<style scoped>
.item-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto 20px;
  background: #fff;
  padding-top: 50px;
}
.frame {
  padding: 10px 85px;
}
.item {
  width: 220px;
  float: left;
  margin: 20px;
  min-height: 350px;
  position: relative;
  border: 1px solid #ffffff;
  padding: 3px;
}
.item:hover {
  border: 1px solid #888;
}
.price {
  color: #e4393c;
  font-size: 20px;
  line-height: 22px;
}
.title {
  font-size: 12px;
  color: #222;
  margin: 5px 0;
}
.des {
  font-size: 12px;
  color: #666;
  margin: 5px 0;
}
span {
  display: block;
}
.buy {
  position: absolute;
  bottom: 0;
}
.into-cart {
  position: absolute;
  left: 105px;
  bottom: 0;
}
.type-labal {
  background: #000;
}
.type-box {
  margin: 8px 0 20px;
  padding: 0 120px 30px;
}
.labal {
  width: 200px;
  text-align: center;
  float: left;
  font-size: 14px;
  margin-left: 80px;
  cursor: pointer;
}
fieldset {
  border-top: 2px solid #000;
  margin-top: 30px;
}
legend {
  color: #fff;
  background: black;
  margin-left: 50px;
  padding: 5px 40px;
}
.page-number {
  padding: 5px 30% 50px;
}
</style>
