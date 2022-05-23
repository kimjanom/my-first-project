<template>
  <div class="album">
    <Header/>
    <div class="wrapper">
      <div style="grid-row: 1 ; grid-column: 2 ">
        <h1 style="float: left ; font-family: Gabriola ; top: 10px ; position: relative">앨범 정보</h1>
      </div>
      <div class="green_window">
        <div class="albumWrapper">
          <div><img style="width: 392px;height: 392px"
                    :src="`http://localhost:8081/imageLink/+${list[0]}.com`">
          </div>
          <div class="table">
            <div style="grid-row: 2 ; grid-column: 2">
              <h3 style="position: relative ;float: left ; display: block">{{ this.list[2] }}</h3>
            </div>
            <div style="grid-row: 3 ; grid-column: 2 ; border-top: 0px">
              <h4 class="composer">작곡가:{{ this.list[1] }}</h4>
            </div>
            <div style="  ; color: #505050; grid-row: 4;grid-column: 2; border-top:0px">
              <tr>
                <td style="background-color: unset !important;border-style: hidden ; float: left">작성일:{{
                    this.list[6]
                  }}
                </td>
              </tr>
              <tr>
                <td style="background-color: unset !important;border-style: hidden; float: left">장르:{{
                    this.list[3]
                  }}
                </td>
              </tr>
              <tr>
                <td style="background-color: unset !important;border-style: hidden; float: left">설명:{{
                    this.list[5]
                  }}
                </td>
              </tr>
            </div>
            <div style="grid-row: 5;grid-column: 2; border-top: 0px">
              <span style="background-image: url('https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-person-icon-png-image_1788612.jpg');  background-size: 50px;
              display: block;
              background-repeat: unset;
              background-position: center;
              background-size: 60px;
              width: 60px;
              height: 60px;
              padding-right: 25px"></span>
              <sppan class="visiter" style="border-top: 0px">{{ this.list[4] }}</sppan>
            </div>
          </div>
        </div>
      </div>
      <div style="grid-row: 3 ; grid-column: 2; ">
        <!--        <audio class="player" controls ref="audio" preload="auto">-->
        <!--          <source v-bind:src="this.list[7]" ref="source" type="audio/mpeg">-->
        <!--        </audio>-->
      </div>
      <div id="floatdiv">
        <audio class="mp3Player" controls>
          <source v-if="list[0]" :src="`http://localhost:8081/audioLink/+${list[0]}.mp3`" type="audio/mpeg">
        </audio>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'album',
  components: { Header },
  data () {
    return {
      list: [],
      isFileATrack: undefined,
      ID: undefined
    }
  },
  methods: {
    async play () {
      this.ID = this.$route.query.id
      console.log(this.ID)
      this.$axios.defaults.headers.post['X-AUTH-TOKEN'] = this.$cookies.get('X-AUTH-TOKEN')
      await this.$axios
          .post('http://localhost:8081/vue/album/detail', null, {
            params: {
              id: this.ID
            },
            withCredentials: true
          })
          .then((res) => {
            console.log(res.data[0])
            this.list = res.data
          })
      return this.list
    }
  },
  beforeCreate () {

  },
  created () {
    this.play()
    // eslint-disable-next-line no-empty
  },
  beforeMount () {
  },
  mounted: function () {
  }
}
</script>

<style>
/*.mp3Player {*/
/*  width: 100%;*/
/*  height: 100%;*/

/*}*/

/*#floatdiv {*/
/*  position: fixed;*/
/*  width: 100%;*/
/*  height: 6%;*/
/*  display: inline-block;*/
/*  right: 0px; !* 창에서 오른쪽 길이 *!*/
/*  top: 93%; !* 창에서 위에서 부터의 높이 *!*/
/*  background-color: transparent;*/
/*  margin: 0;*/
/*}*/

/*.album {*/
/*  !*width: 100%;*!*/
/*  !*height: 100%;*!*/
/*}*/

/*.visiter {*/
/*  padding-left: 30px;*/
/*  font-size: 30px;*/
/*  color: #505050;*/
/*  position: relative;*/
/*  right: 220px;*/
/*  bottom: 50px;*/
/*  text-decoration: unset;*/
/*}*/

/*.composer {*/
/*  color: #46b4d9;*/
/*  position: relative;*/
/*  display: block;*/
/*  !*top: 50px;*!*/
/*  right: 275px*/
/*}*/


/*.search_area {*/
/*  !*position: relative;*!*/
/*  !*position: fixed;*!*/
/*  grid-template-columns:300px 200px 800px 300px;*/
/*  grid-template-rows:100px 150px;*/
/*  !*grid-template-rows: 150px ;*!*/
/*  top: 300px;*/
/*  !*left: 300px;*!*/
/*  display: grid;*/
/*}*/


/** {*/
/*  box-sizing: border-box;*/
/*}*/

/*body {*/
/*  font-family: Verdana, sans-serif;*/
/*}*/

/*img {*/
/*  vertical-align: middle;*/
/*}*/


/*@-webkit-keyframes fade {*/
/*  from {*/
/*    opacity: .4*/
/*  }*/
/*  to {*/
/*    opacity: 1*/
/*  }*/
/*}*/

/*@keyframes fade {*/
/*  from {*/
/*    opacity: .4*/
/*  }*/
/*  to {*/
/*    opacity: 1*/
/*  }*/
/*}*/

/*!* On smaller screens, decrease text size *!*/
/*@media only screen and (max-width: 300px) {*/
/*  .text {*/
/*    font-size: 11px*/
/*  }*/
/*}*/

/*.image_rolling_area.rolling_board_type .image_rolling_link .image_area {*/
/*  !*position: relative;*!*/
/*  !*top:300px;*!*/
/*  height: 100%;*/
/*}*/

/*.image_rolling_area.rolling_board_type .image_rolling_link {*/

/*  display: block;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

/*.image_rolling_area.rolling_board_type {*/
/*  !*position: relative;*!*/
/*  !*top:300px;*!*/
/*  width: 350px;*/
/*  height: 200px;*/
/*}*/

/*element.style {*/
/*  position: absolute;*/
/*  width: 350px;*/
/*  height: 200px;*/
/*  right: 0px;*/
/*  top: 208px;*/
/*  z-index: 1;*/
/*}*/

/*.sc_login .login_msg {*/
/*  padding-left: 3px;*/
/*  color: grey;*/
/*}*/

/*.sc_login .sub_area .look_box {*/
/*  float: left;*/
/*}*/

/*.sc_login .sub_area .link_join {*/
/*  bottom: 10px;*/
/*  position: relative;*/
/*  float: right;*/
/*  color: #505050;*/
/*  color: #505050;*/
/*  font-size: 15px;*/
/*}*/

/*.sc_login .sub_area {*/
/*  margin: 14px 8px 0 4px;*/
/*}*/

/*.sc_login .link_login {*/
/*  display: block;*/
/*  padding: 15px 0;*/
/*  margin-top: 11px;*/
/*  background-color: #50bcdf;*/
/*  border: 1px solid #46b4d9;*/
/*  -webkit-border-radius: 2px;*/
/*  border-radius: 2px;*/
/*  font-size: 13px;*/
/*  color: #fff;*/
/*  font-weight: 700;*/
/*  text-align: center;*/
/*  text-decoration: none;*/
/*}*/

/*.nav-link {*/
/*  color: black !important*/
/*}*/

/*.navc {*/
/*  color: black !important;*/
/*  font-size: 25px;*/
/*  !*font-family: Gabriola,Serif;*!*/
/*  font-family: -apple-system;*/
/*}*/

/*.wrapper {*/
/*  !*padding-top: 56.25%; !* 16:9 화면비율 *!*!*/
/*  overflow: visible;*/
/*  position: relative;*/
/*  top: -10px;*/
/*  !*left: 300px;*!*/
/*  display: grid;*/
/*  grid-column-gap: 30px;*/
/*  grid-template-columns:420px 1000px 420px;*/
/*  !*grid-template-column: 22% 56% 22%;*!*/
/*  grid-template-rows:100px 495px 350px;*/
/*  !*grid-template-columns: repeat(3, 1fr);*!*/
/*  !*grid-gap: 10px;*!*/
/*  !*grid-auto-rows: minmax(100px, auto);*!*/
/*}*/

/*.column_right {*/
/*  grid-column: 3;*/
/*  grid-row: 1;*/
/*  !*top:300px;*!*/
/*  !*float: right;*!*/
/*  !*right: 300px;*!*/
/*  !*width: 350px;*!*/
/*  !*margin-right: 300px;*!*/

/*}*/

/*.column_left {*/
/*  grid-column: 2;*/
/*  grid-row: 1;*/
/*  !*overflow: hidden;*!*/
/*  !*margin-left: 300px;*!*/
/*  !*!*float: left;*!*!*/
/*  !*width: 900px;*!*/
/*}*/

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

/*.bg-light {*/
/*  background-color: #50bcdf;*/
/*}*/

/*.nav1 {*/
/*  position: relative;*/
/*  top: 10px;*/
/*  grid-column-start: 1;*/
/*  grid-column-end: 6;*/
/*  grid-row: 2;*/
/*}*/

/*.group_flex {*/
/*  position: relative;*/
/*  width: 1130px;*/
/*  height: 100%;*/
/*  margin: 0 auto;*/
/*  padding: 0 30px;*/
/*}*/

/*#div {*/
/*  position: relative;*/
/*}*/

/*#input {*/
/*  border: 1px;*/
/*  solid-color: white;*/
/*}*/

/*.my-2 {*/
/*  position: relative;*/
/*  left: 130px;*/
/*  bottom: 16px;*/
/*}*/

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

/*.search {*/
/*  grid-column: 3;*/
/*  !*margin: 100px;*!*/
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

/*.wrapper .green_window {*/
/*  grid-column: 2;*/
/*  grid-row: 2;*/
/*  overflow: hidden;*/
/*  !*float: left;*!*/
/*  width: 33%;*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 80%;*/
/*  border: 2px solid #50bcdf;*/
/*  -webkit-border-radius: 2px;*/
/*  border-radius: 2px;*/
/*}*/

/*.albumWrapper {*/
/*  overflow: auto;*/
/*  position: relative;*/
/*  !*left: 300px;*!*/
/*  display: grid;*/
/*  grid-template-columns: 392px auto;*/
/*  grid-template-rows: 392px;*/
/*}*/

/*.albumWrapper .table {*/
/*  border-top: 0px !important;*/
/*  overflow: hidden;*/
/*  position: relative;*/
/*  !*left: 300px;*!*/
/*  display: grid;*/
/*  grid-template-columns:auto;*/
/*  grid-template-rows: 15px 92px 200px 70px 15px;*/
/*  grid-template-columns: 15px auto 15px;*/
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

/*.blind {*/
/*  position: absolute;*/
/*  clip: rect(0 0 0 0);*/
/*  width: 1px;*/
/*  height: 1px;*/
/*  margin: -1px;*/
/*  overflow: hidden;*/
/*}*/

/*.search_area .btn_submit .ico_search_submit {*/
/*  display: inline-block;*/
/*  width: 22px;*/
/*  height: 22px;*/
/*  background-position: -420px 0;*/
/*  background-repeat: no-repeat;*/
/*  vertical-align: top;*/
/*}*/

</style>
