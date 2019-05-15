<template>
	<div class="cart">
		<!-- 页面标题 -->
		<h1 class="title">购物车</h1>
		<div v-if="logined">
			<div v-if="list.length == 0">
				<p>购物车空空如也，快去
					<router-link class="blue" to="/list">浏览商品</router-link>
					吧
				</p>
			</div>
			<div v-else>
				<!-- 购物车信息 -->
				<div class="cart-box">
					<el-checkbox
						:indeterminate="isIndeterminate"
						v-model="checkAll"
						@change="handleCheckAllChange"
					>全选</el-checkbox>
					<div style="margin: 15px 0;"></div>
					<div class="item" v-for="(item,index) in list" :key="item._id">
						<el-checkbox-group class="group" v-model="checkedGoods" @change="handlecheckedGoodsChange">
							<!-- 复选框 & 商品名 -->
							<div class="checkbox-box">
								<el-checkbox class="goods-name" :label="item.price">{{item.name}}</el-checkbox>
							</div>
							<!-- 图片 -->
							<img class="img" :src="item.picture" alt="加载失败" :title="item.descriptions">
							<!-- 价钱 -->
							<input type="text" disabled class="price" :value="item.price">
							<!-- 改变数量 -->
							<div class="count-box">
								<el-button @click="minus(index)" class="count-minus">-</el-button>
								<input class="txt-count" type="text" v-model="count[index]">
								<el-button @click="add(index)" class="count-add">+</el-button>
							</div>
							<!-- 删除按钮 -->
							<el-button type="danger" @click="delHandle(index)" class="btn-delete" round>删除</el-button>
						</el-checkbox-group>
					</div>
				</div>
				<!-- 结算 -->
				<div class="buy">
					<!-- 全选 -->
					<el-checkbox
						:indeterminate="isIndeterminate"
						v-model="checkAll"
						@change="handleCheckAllChange"
					>全选</el-checkbox>
					<!-- 总数量 -->
					<p>
						已选商品
						<span class="red">{{allCount}}</span>件
					</p>
					<p>
						合计（不含运费）：
						<span class="red">{{total_price}}</span>元
					</p>
					<el-button type="danger" :disabled="jiesuan" @click="buy_now">结算</el-button>
				</div>
			</div>
		</div>
		<!-- 未登录 -->
		<div v-else class="waring">
			<p>尚未登录，点击
				<router-link class="waring-login" to="/login">登录</router-link>
			</p>
		</div>
	</div>
</template>

<script>
import { path } from "../service/path";
import axios from "axios";

export default {
  data() {
    return {
      checkAll: false,
      checkedGoods: [],
      goods: [],
      isIndeterminate: true,
      list: [],
      uid: "",
      count: [],
      allCount: 0,
      total_price: 0,
      jiesuan: true,
      logined: false
    };
  },
  methods: {
    /* 全选 */
    handleCheckAllChange(val) {
      this.checkedGoods = val ? this.goods : [];
      this.isIndeterminate = false;
      if (this.checkedGoods.length) {
        this.jiesuan = false;
      } else {
        this.jiesuan = true;
      }
    },
    /* 改变选中 */
    handlecheckedGoodsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.goods.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.goods.length;
      if (checkedCount) {
        this.jiesuan = false;
      } else {
        this.jiesuan = true;
      }
    },
    /* 减按钮事件 */
    minus(index) {
      this.count[index] -= 1;
      /* 计算总数和总价 */
      var sum_c = 0;
      var sum_p = 0; //sum_c,sum_p 总数和总价
      this.count.forEach((item, i) => {
        sum_c += item;
        sum_p += item * this.list[i].price;
      });
      this.allCount = sum_c;
      this.total_price = sum_p;
      this.$set(this.count, index, this.count[index]);

      if (this.count[index] <= 0) {
        this.count[index] = 1;
        /* 计算总数和总价 */
        var sum_c = 0;
        var sum_p = 0; //sum_c,sum_p 总数和总价
        this.count.forEach((item, i) => {
          sum_c += item;
          sum_p += item * this.list[i].price;
        });
        this.allCount = sum_c;
        this.total_price = sum_p;
        this.$set(this.count, index, this.count[index]);
        this.$message({
          message: "不能再少了哦",
          type: "error"
        });
      }
    },
    /* 加按钮事件 */
    add(index) {
      this.count[index] += 1;
      /* 计算总数和总价 */
      var sum_c = 0;
      var sum_p = 0; //sum_c,sum_p 总数和总价
      this.count.forEach((item, i) => {
        sum_c += item;
        sum_p += item * this.list[i].price;
      });
      this.allCount = sum_c;
      this.total_price = sum_p;
      this.$set(this.count, index, this.count[index]);
    },
    /* 删除按钮事件 */
    delHandle(index) {
      axios
        .post(`${path}cart/delete_cart`, {
          uid: this.uid,
          gid: this.list[index]._id
        })
        .then(data => {
          if ((data.data.status = "success")) {
            this.list.splice(index, 1);
          }
          this.$message({
            message: data.data.info,
            type: data.data.status
          });
        });
    },
    /* 结算事件 */
    buy_now() {
      this.$message({
        message: "暂无后续逻辑",
        type: "info"
      });
    }
  },
  created() {
    if (localStorage.getItem('token') == null) {
      this.logined = false;
    } else {
      this.uid = localStorage.getItem("token");
      this.logined = true;
		}
		console.log(this.logined)
    axios.get(`${path}cart/get_cart?token=${this.uid}`).then(data => {
      if (data.data.status == "success") {
        this.list = data.data.list;
        for (var i in this.list) {
          this.goods[i] = this.list[i].price;
          this.count[i] = this.list[i].quantity;
          this.allCount += this.list[i].quantity;
          this.total_price += this.list[i].quantity * this.list[i].price;
        }
      }
    });
  }
};
</script>

<style scoped>
.cart {
  padding-bottom: 50px;
}
p {
  text-align: center;
}
.waring-login {
  color: red;
}
.blue {
	color: blue;
}
.title {
  text-indent: 5em;
  line-height: 80px;
}
.cart-box {
  width: 80%;
  margin: 10px auto 3px;
}
.img {
  width: 120px;
  height: 120px;
  float: left;
}
.item {
  border: 1px solid #333;
  margin-bottom: 15px;
  padding: 15px;
}
.goods-name {
  display: block;
  width: 200px;
  height: 60px;
  font-size: 12px;
}
.checkbox-box {
  font-size: 12px;
  width: 28%;
  height: 100%;
  float: left;
  margin-top: 4%;
}
div {
  overflow: hidden;
}
.price {
  border: 0;
  background-color: inherit;
  float: left;
  display: block;
  font-size: 16px;
  color: red;
  font-weight: bold;
  width: 40px;
  height: 100%;
  line-height: 100%;
  margin-top: 4%;
  margin-left: 11%;
}
.count {
  font-size: 17px;
  font-weight: bold;
  display: block;
  float: left;
}
.count-box {
  padding-top: 5px;
  float: left;
  margin-top: 2.5%;
  margin-left: 11%;
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
.btn-delete {
  margin-top: 3%;
  margin-left: 11%;
}
.buy {
  width: 80%;
  height: 4em;
  margin: 0 auto;
  background: rgba(240, 195, 148, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.red {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
</style>
