<template lang='pug'>
  div(id="app")
    div.top
        div.container
            div.left
               el-dropdown
                  span(class="el-dropdown-link" style='cursor:pointer;') 送货至：四川
                    i(class="el-icon-arrow-down el-icon--right")
                  el-dropdown-menu(slot="dropdown")
                    p(style='border-bottom:1px dashed #999;color:#999;padding-left:20px') 请选择所在的收货地区
                    el-dropdown-item(v-for='(item,index) in address' :key='index') {{`${item.name} `}}
                      span(v-for='option in item.list') {{`${option} `}}
            div.right
                p 你好
                    span 请登录
                p 免费注册
    div.middle
        router-view
    div.bottom
        div.container
          p 备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com Copyright  2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group
          ul
            li
            li
            li
            li
            li
            li
</template>
<script>
export default {
  data() {
    return {
      address: [
        {
          name: "A",
          list: ["安徽", "澳门"]
        },
        {
          name: "B",
          list: ["北京"]
        },
        {
          name: "C",
          list: ["重庆"]
        },
        {
          name: "F",
          list: ["福建"]
        },
        {
          name: "G",
          list: ["安徽", "澳门", "贵州", "甘肃"]
        },
        {
          name: "H",
          list: ["河北", "河南", "黑龙江", "海南", "湖北", "湖北"]
        },
        {
          name: "J",
          list: ["江苏", "吉林", "吉林"]
        },
        {
          name: "L",
          list: ["辽宁"]
        },
        {
          name: "N",
          list: ["内蒙古", "宁夏"]
        },
        {
          name: "Q",
          list: ["青海"]
        },
        {
          name: "S",
          list: ["上海", "山东", "山西", "四川", "陕西"]
        },
        {
          name: "T",
          list: ["台湾", "天津"]
        },
        {
          name: "X",
          list: ["西藏", "香港", "香港"]
        },
        {
          name: "Y",
          list: ["云南"]
        },
        {
          name: "Z",
          list: ["浙江"]
        }
      ]
    };
  },
  mounted() {
    this.Axios({
      method: "post",
      url: "/registry",
      data:{
        account:'test',
        password:'adsd'
      }
    })
      .then(data => {
        console.log(data.data.msg);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  overflow-x: hidden;
}
li {
  list-style: none;
  font-size: 10px;
}
#app {
  width: 100%;
  .top {
    height: 36px;
    line-height: 36px;
    background: #f6f6f6;
    font-size: 12px;
    .left {
      height: 36px;
      float: left;
      .el-dropdown-menu {
        margin-left: 10px;
      }
    }
    .right {
      height: 36px;
      float: right;
      p {
        display: inline-block;
      }
      p:nth-child(1) {
        span {
          color: #ff4e00;
          cursor: pointer;
        }
      }
      p:nth-child(2) {
        color: #ff4e00;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .bottom {
    height: 150px;
    background: #f6f6f6;
    padding: 10px 0;
    p {
      text-align: center;
      font-size: 13px;
      color: #999999;
    }
  }
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>