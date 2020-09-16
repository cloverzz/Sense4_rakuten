<template>
<div class="home">
  <el-row  class="row-header" type="flex" justify="center" >
      <el-col :span="24" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="~@/assets/img_main/header.png" class="image">
        </el-card>
      </el-col>
  </el-row>

  <el-row  class="row-header" type="flex" justify="center" >
      <el-col :span="24" >
          <el-carousel :interval="3000" arrow="always" height="224px">
            <el-carousel-item >
              <img src="~@/assets/img_main/pic1.gif" class="image">
            </el-carousel-item>

            <el-carousel-item >
              <img @click="pushabout()" src="~@/assets/img_main/pic5.png" class="image">
            </el-carousel-item>

            <el-carousel-item >
              <img src="~@/assets/img_main/pic2.gif" class="image">
            </el-carousel-item>
           </el-carousel>
      </el-col>
  </el-row>


  <el-row  class="row-header" type="flex" justify="center" >
      <el-col :span="24" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="~@/assets/img_main/footer.png" class="image">
        </el-card>
      </el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
    pushabout: function () {
      this.$router.push("/scafold")
    }
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.image {
    width: 100%;
    display: block;
  }
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>