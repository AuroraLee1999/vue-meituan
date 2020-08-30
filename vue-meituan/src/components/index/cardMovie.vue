<template>
  <div class="my-card-content" @mouseenter="showBtn()" @mouseleave="hideBtn()">
    <div class="btn" v-if="btnShow">
      <div class="btn pre" @click="pre">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="btn next" @click="next">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="my-movie" :style="{left:movieLeft}">
      <div>
        <!-- <el-carousel-item > -->
        <div class="movie-card" v-for="(item,index) in movieList" :key="index" ref="movieCard">
          <img class="movieImg" :src="item.imgUrl" alt />
          <img
            class="imax"
            v-if="item.isIMAX"
            src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
            alt
          />
          <div class="text-info">
            <p v-show="item.like!=null">
              <span class="like">{{item.like}}</span>人想看
            </p>
            <p v-show="item.point!=null">
              观众评
              <span class="point">{{item.point}}</span>
            </p>
            <p class="name">{{item.name}}</p>
          </div>
          <span class="buy-ticket">购票</span>
        </div>
        <!-- </el-carousel-item> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          name: "我在时间尽头等你",
          like: 642546,
          index: 0,
          imgUrl:
            "https://p1.meituan.net/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg@428w_594h_1e_1c",
          point: null,
          isIMAX: false,
          is3D: false
        },
        {
          name: "八佰",
          like: null,
          index: 1,
          imgUrl:
            "https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@428w_594h_1e_1c",
          point: 9.2,
          isIMAX: true,
          is3D: false
        },
        {
          name: "荞麦疯长",
          like: 140514,
          index: 2,
          imgUrl:
            "https://p1.meituan.net/movie/396a1e77ff4ef838a1c697ffbc71a8bb2730189.jpg@428w_594h_1e_1c",
          point: null,
          isIMAX: false,
          is3D: false
        },
        {
          name: "小妇人",
          like: 134064,
          index: 3,
          imgUrl:
            "https://p1.meituan.net/movie/cdb164c203fc0c2465278ddd165e91c84503798.jpg@428w_594h_1e_1c",
          point: null,
          isIMAX: false,
          is3D: false
        },
        {
          name: "盗梦空间",
          like: 19572,
          index: 4,
          imgUrl:
            "https://p1.meituan.net/moviemachine/c2496a7290a72eac6081321898c347693550574.jpg@428w_594h_1e_1c",
          point: null,
          isIMAX: true,
          is3D: false
        },
        {
          name: "电力之战",
          like: 5857,
          index: 5,
          imgUrl:
            "https://p1.meituan.net/moviemachine/a7739d0d38e8f6b63ba5bcbcb2874428583529.jpg@428w_594h_1e_1c",
          point: null,
          isIMAX: false,
          is3D: false
        },
        {
          name: "哈利·波特与密室",
          like: null,
          index: 6,
          imgUrl:
            "https://p0.meituan.net/moviemachine/4755165ffd65eb737bb5160ea911e0fa343438.jpg@428w_594h_1e_1c",
          point: 9.2,
          isIMAX: true,
          is3D: true
        }
      ],
      btnShow: false,
      movieLeft:0,
    };
  },
  // mounted() {
  //   this.$refs.movie.style.left = 0 + "px";
  // },
  methods: {
    showBtn() {
      this.btnShow = true;
    },
    hideBtn() {
      this.btnShow = false;
    },
    pre() {
      if(this.movieLeft == -1150 + 'px'){
        this.movieLeft = 0;
      }
    },
    next() {
      // console.log(this.$refs.movie.$el);
      // if (this.$refs.movie.style.left > 1100) return false;
      // this.$refs.movie.style.left -= 1100 + "px";
      this.movieLeft = -1150+'px';
    }
  },
  mounted(){
    // console.log(this.$refs.movie.style)
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/movie.scss";
</style>