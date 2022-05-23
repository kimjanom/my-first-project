<template>
  <div class="main">
    <Header/>
    <div class="wrapper">
      <div class="column_left">
        <div>
          <div
              v-for="number in [currentNumber]"
              :key='number'
              transition="fade"
          >
            <img
                class="image_1"
                :src="images[Math.abs(currentNumber) % images.length]"
                v-on:mouseover="stopRotation"
                v-on:mouseout="startRotation"
            />
          </div>
        </div>
        <div class="musicTable">
          <template>
            <div>
              <b-table>
                <tr>
                  <th>조회수</th>
                  <th>음악</th>
                  <th>이름</th>
                </tr>
              </b-table>
              <b-table style="bs-table-striped-bg: rgb(255 255 255 / 5%)" striped hover :items="list" :fields="fields"
                       @row-clicked="goDetail"></b-table>
            </div>
          </template>
        </div>
      </div>
      <div style="clear: none"></div>
      <div class="column_right">
        <div id="account" class="sc_login">
          <h2 class="blind">로그인</h2>
          <p class="login_msg">welcom to bonobono site !!</p>
          <a href="'#" class="link_login">
            로그인
          </a>
          <div class="sub_area">
            <div class="look_box">
            </div>
            <a href="#" class="link_join">회원가입</a>
          </div>
        </div>
        <div id="rollingboard_container"
             style="position: relative; width: 350px; height: 200px; right: 0px; top: 100px; z-index: 1;">
          <div class="image_rolling_area rolling_board_type">
            <a href="https://siape.veta.naver.com/fxclick?eu=EU10041892&amp;calp=-&amp;oj=ZagUyei1lSgpx31QgV38anGzoEzDhVv%2FPNNafKSHFzjf54KsNVBIeV6BoybL9UhwFszz0WdCmeE%2FWHO6IqaYT3beMWZWx6kbVo2eUPCWKRVtonaOyZyAMXQDCWXx89CC9F9ildSzAk9Y3078Yhkr4sWPj0ecpiqaHUsHbqq%2BK%2BvW8QhOHuq6a3rwEMWmlWBtZJog8DEjB9G3JRglyzW34UA7g35TJtQoH59HDyNQbraYhlk1Ff3vCw&amp;ac=8537948&amp;src=5758641&amp;br=3824199&amp;evtcd=P901&amp;x_ti=1314&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=230500d08d77c6f0147093c14e430e7f&amp;eltts=kuMdGFJdFLDI86eghpCnEg%3D%3D&amp;lu=&amp;brs=Y&amp;"
               class="image_rolling_link" target="_blank">
              <div class="image_area three_images animation_start" data-role="rollingWrapper">
                <img src="https://ssl.pstatic.net/tveta/libs/1385/1385745/fbc5d7337107bb4c3824_20220401141017793.jpg"
                     width="350" height="200" alt="[광고]여의도 로망에서 당신만의 일상으로 여의도 현대마에스트로">
                <!--              <img src="https://ssl.pstatic.net/tveta/libs/1385/1385745/ecf4d8aa89783074f65c_20220401141024615.jpg" width="350" height="200">-->
                <!--              <img src="https://ssl.pstatic.net/tveta/libs/1385/1385745/5c32ee3b52f207b2b0d9_20220401141031627.jpg" width="350" height="200">-->
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// eslint-disable-next-line no-new
// var slideIndex = 0
// showSlides()
//
// function showSlides () {
//   var i
//   var slides = document.getElementsByClassName('mySlides')
//   var dots = document.getElementsByClassName('dot')
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   slideIndex++
//   if (slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '')
//   }
//   slides[slideIndex - 1].style.display = 'block'
//   dots[slideIndex - 1].className += ' active'
//   setTimeout(showSlides, 4000)// Change image every 2 seconds
// }
import Header from '@/components/header.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main1',
  components: { Header },
  created () {
    console.log('1')
    console.log('gdgd', this.$session.get(this.$cookies.get('name')))
    console.log(this.$cookies.get('session'))
    if (this.$session.get(this.$cookies.get('name')) !== this.$cookies.get('session')) {
      this.$router.push({ path: '/about' })
    }
    this.getTable()
  },
  // get 과 post 가 요청 한 헤드 를 사용 하 는 Cookie 헤드 가 다르다
  // 는 것 을 알 수 있 습 니 다. get 요청 은 처음에 쿠키 헤드 필드 가 없 었 고
  // post 요청 은 항상 쿠키 헤드 필드 가 있 었 습 니 다. 그 쿠키 는 JSESSIONID 입 니 다.
  mounted () {
  },
  data () {
    const images = ['https://artlist-dev.imgix.net/artlist/personal-plan-hero-desktop.jpg?auto=format&w=1920&h=auto',
      'http://src.hidoc.co.kr/image/lib/2017/7/25/20170725100648387_0.jpg',
      'https://www.thedailypost.kr/news/photo/201903/67271_60073_631.png'
    ]
    const name = this.$cookies.get('name')
    const currentNumber = 0
    const timer = null
    return {
      fields: [{
        key: '0',
        label: '조회수'
      }, {
        key: '1',
        label: '노래'
      }, {
        key: '2',
        label: '이름'
      }],
      images,
      name,
      currentNumber,
      timer,
      list: [],
      res: []
    }
  },
  methods:
      {
        goDetail (item) {
          console.log('아이템', item)
          this.$router.push({
            name: 'album',
            query: {
              id: item[3],
              name: 'aaa'
            }
          })
        },
        getTable () {
          // const varr = Array
          const varr = Array.from(Array(5), () => Array(null).fill(null))
          this.$axios.defaults.headers.post['X-AUTH-TOKEN'] = this.$cookies.get('X-AUTH-TOKEN')
          this.$axios
              .post('http://localhost:8081/vue/musicTableDesc', null, { withCredentials: true })
              .then((res1) => {
                    this.res = res1
                    console.log('레스 데이터', this.res.data[0])
                    for (let i = 0; i < 5; i++) {
                      if (this.res.data[i] === undefined) {
                        break
                      }
                      console.log(this.res.data[i])
                      console.log(this.res.data[i].fileOriginalName)
                      varr[i][1] = this.res.data[i].fileOriginalName
                      varr[i][0] = this.res.data[i].views
                      console.log(this.res.data[i].views)
                      varr[i][1] = this.res.data[i].fileOriginalName
                      varr[i][2] = this.res.data[i].name
                      varr[i][3] = this.res.data[i].id
                    }
                    console.log(varr)
                    this.list = varr
                    console.log('리스트', this.list)
                  }
              )
        },

        startRotation: function () {
          this.timer = setInterval(this.next, 3000)
        },
        stopRotation: function () {
          clearTimeout(this.timer)
          this.timer = null
        },
        next: function () {
          this.currentNumber += 1
        },
        prev: function () {
          this.currentNumber -= 1
        }
      }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
.mp3Player {
  width: 100%;
  height: 100%;

}

#floatdiv {
  position: fixed;
  width: 100%;
  height: 6%;
  display: inline-block;
  right: 0px; /* 창에서 오른쪽 길이 */
  top: 93%; /* 창에서 위에서 부터의 높이 */
  background-color: transparent;
  margin: 0;
}

.album {
  /*width: 100%;*/
  /*height: 100%;*/
}

.visiter {
  padding-left: 30px;
  font-size: 30px;
  color: #505050;
  position: relative;
  right: 220px;
  bottom: 50px;
  text-decoration: unset;
}

.composer {
  color: #46b4d9;
  position: relative;
  display: block;
  /*top: 50px;*/
  float: left;

}

.search_area {
  /*position: relative;*/
  /*position: fixed;*/
  grid-template-columns: auto 420px 1020px auto;
  grid-template-rows:100px 150px;
  /*grid-template-rows: 150px ;*/
  top: 300px;
  /*left: 300px;*/
  display: grid;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Verdana, sans-serif;
}

img {
  vertical-align: middle;
}

@-webkit-keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}

@keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {
    font-size: 11px
  }
}

.image_rolling_area.rolling_board_type .image_rolling_link .image_area {
  /*position: relative;*/
  /*top:300px;*/
  height: 100%;
}

.image_rolling_area.rolling_board_type .image_rolling_link {

  display: block;
  width: 100%;
  height: 100%;
}

.image_rolling_area.rolling_board_type {
  /*position: relative;*/
  /*top:300px;*/
  width: 350px;
  height: 200px;
}

element.style {
  position: absolute;
  width: 350px;
  height: 200px;
  right: 0px;
  top: 208px;
  z-index: 1;
}

.sc_login .login_msg {
  padding-left: 3px;
  color: grey;
}

.sc_login .sub_area .look_box {
  float: left;
}

.sc_login .sub_area .link_join {
  bottom: 10px;
  position: relative;
  float: right;
  color: #505050;
  color: #505050;
  font-size: 15px;
}

.sc_login .sub_area {
  margin: 14px 8px 0 4px;
}

.sc_login .link_login {
  display: block;
  padding: 15px 0;
  margin-top: 11px;
  background-color: #50bcdf;
  border: 1px solid #46b4d9;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  font-size: 13px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
}

.nav-link {
  color: black !important
}

.navc {
  color: black !important;
  font-size: 25px;
  /*font-family: Gabriola,Serif;*/
  font-family: -apple-system;
}

.wrapper {
  /*padding-top: 56.25%; !* 16:9 화면비율 *!*/
  overflow: visible;
  position: relative;
  top: -10px;
  /*left: 300px;*/
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns:auto 1000px auto;
  /*grid-template-column: 22% 56% 22%;*/
  grid-template-rows:100px 495px 350px;
  /*grid-template-columns: repeat(3, 1fr);*/
  /*grid-gap: 10px;*/
  /*grid-auto-rows: minmax(100px, auto);*/
  margin-left: auto;
  margin-right: auto;
}

.column_right {
  grid-column: 3;
  grid-row: 1;
  /*top:300px;*/
  /*float: right;*/
  /*right: 300px;*/
  /*width: 350px;*/
  /*margin-right: 300px;*/

}

.column_left {
  grid-column: 2;
  grid-row: 1;
  /*overflow: hidden;*/
  /*margin-left: 300px;*/
  /*!*float: left;*!*/
  /*width: 900px;*/
}

.nav1 .green_window {
  box-shadow: #45a5c4 0px 5px 20px 0px;
  position: relative;
  width: 100%;
  height: 65px;
  border: 5px solid transparent;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  border-radius: 5px 5px 5px 5px;
}

.bg-light {
  background-color: #50bcdf;
}

.nav1 {
  position: relative;
  top: 10px;
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row: 2;
}

.group_flex {
  position: relative;
  width: 1130px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

#div {
  position: relative;
}

#input {
  border: 1px;
  solid-color: white;
}

.my-2 {
  position: relative;
  left: 130px;
  bottom: 16px;
}

#cat {
  /*position: relative;*/
  margin: -10px;
  width: 150px;
  /*left: 100px;*/
  /*bottom: 40px;*/
  /*right: 100px;*/
}

.img {
  grid-column: 2;
  float: left;
  width: 450px;
  bottom: 60px;
}

.search {
  grid-column: 3;
  /*margin: 100px;*/
}

.green_window {
  overflow: hidden;
  /*float: left;*/
  width: 33%;
  position: relative;
  width: 582px;
  height: 52px;
  border: 2px solid #50bcdf;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.wrapper .green_window {
  grid-column: 2;
  grid-row: 2;
  overflow: hidden;
  /*float: left;*/
  width: 33%;
  position: relative;
  width: 100%;
  height: 80%;
  border: 2px solid #50bcdf;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.albumWrapper {
  overflow: auto;
  position: relative;
  /*left: 300px;*/
  display: grid;
  grid-template-columns: 392px auto;
  grid-template-rows: 392px;
}

.albumWrapper .table {
  border-top: 0px !important;
  overflow: hidden;
  position: relative;
  /*left: 300px;*/
  display: grid;
  grid-template-columns:auto;
  grid-template-rows: 15px 41px 41px 200px 70px 15px;
  grid-template-columns: 15px auto 15px;
}

#query {
  position: relative;
  outline: none;
  background: transparent;
  border: none;
  solid-color: white;
  float: left;
  width: 33%;
  position: relative;
  width: 484px;
  height: 48px;
  font-size: 30px;
}

.search_area .btn_submit {
  background-repeat: no-repeat;
  background-image: url("https://cdn-icons-png.flaticon.com/512/71/71403.png");
  background-position: 15px center;
  background-size: 30px;
  outline: 0;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 56px;
  background-color: #50bcdf;
  -webkit-border-radius: 0 2px 2px 0;
  border-radius: 0 0px 0px 0;
  cursor: pointer;
  /*image-rendering: ;*/
}

.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}

.search_area .btn_submit .ico_search_submit {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-position: -420px 0;
  background-repeat: no-repeat;
  vertical-align: top;
}

/*----------------------------------------------------------------------------------------------------------------*/

.table {
  --bs-table-bg: #ddf7ff !important;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(255, 255, 255, 0.05) !important;
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}

.musicTable {
  position: relative;
  top: 80px;
  grid-row: 2;
  width: 88%;
  left: 60px;
}

.image_1 {
  width: 880px;
  height: 495px;
  top: 50px;
  position: relative;
  /*left:300px*/
  /*transform: translate(-50%, -50%);*/
}

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}

.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

.mySlides {
  display: block;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  margin: auto;

}

/* Caption text */
.text {
  color: #000000;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: relative;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

.sc_login {
  position: relative;
  top: 50px;
  padding: 16px 16px 12px 17px;
  background-color: #f7f9fa;
  border: 1px solid #dae1e6;
  width: 350px;

}

.nav-link {
  color: black !important
}

/*.nav1.green_window {*/
/*  box-shadow: #45a5c4 0px 5px 20px 0px;*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 65px;*/
/*  border: 5px solid transparent;*/
/*  -webkit-border-radius: 2px;*/
/*  border-radius: 2px;*/
/*  border-radius: 5px 5px 5px 5px;*/
/*}*/

.bg-light {
  background-color: #50bcdf;
}

/*.nav1 {*/
/*  position: relative;*/
/*  top: 10px;*/
/*  grid-column-start: 1;*/
/*  grid-column-end: 6;*/
/*  grid-row: 2;*/
/*}*/

.group_flex {
  position: relative;
  width: 1130px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

#div {
  position: relative;
}

#input {
  border: 1px;
  solid-color: white;
}

.my-2 {
  position: relative;
  left: 130px;
  bottom: 16px;
}

/*#cat {*/
/*  !*position: relative;*!*/
/*  margin: -10px;*/
/*  width: 150px;*/
/*  !*left: 100px;*!*/
/*  !*bottom: 40px;*!*/
/*  !*right: 100px;*!*/
/*}*/

/*.img {*/
/*  grid-column: 2;*/
/*  float: left;*/
/*  width: 450px;*/
/*  bottom: 60px;*/
/*}*/
/*.green_window {*/
/*  overflow: hidden;*/
/*  !*float: left;*!*/
/*  width: 33%;*/
/*  position: relative;*/
/*  width: 582px;*/
/*  height: 52px;*/
/*  border: 2px solid #50bcdf;*/
/*  -webkit-border-radius: 2px;*/
/*  border-radius: 2px;*/
/*}*/

/*#query {*/
/*  position: relative;*/
/*  outline: none;*/
/*  background: transparent;*/
/*  border: none;*/
/*  solid-color: white;*/
/*  float: left;*/
/*  width: 33%;*/
/*  position: relative;*/
/*  width: 484px;*/
/*  height: 48px;*/
/*  font-size: 30px;*/
/*}*/

/*.search_area .btn_submit {*/
/*  background-repeat: no-repeat;*/
/*  background-image: url("https://cdn-icons-png.flaticon.com/512/71/71403.png");*/
/*  background-position: 15px center;*/
/*  background-size: 30px;*/
/*  outline: 0;*/
/*  border: 0;*/
/*  position: absolute;*/
/*  top: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  width: 56px;*/
/*  background-color: #50bcdf;*/
/*  -webkit-border-radius: 0 2px 2px 0;*/
/*  border-radius: 0 0px 0px 0;*/
/*  cursor: pointer;*/
/*  !*image-rendering: ;*!*/
/*}*/
</style>
