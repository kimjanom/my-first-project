<template>
  <div class="header">
    <div>
      <div id="search" class="search_area" data-clk-prefix="sch">
        <div class="img">
          <b-navbar-brand href="#">
            <img id="cat"
                 src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTRfNDUg/MDAxNTI2MjgxNzYyODg5.oHk4cQMVLz3pM1k1_ZcWuy9jRZ8tEg0y08u-8B5AeKMg.JefNm06Oxfk2aAQG8gsalulIPVFHG7pFDcQWJRJpHy4g.JPEG.retspe/bn14.jpg?type=w800"
                 class="d-inline-block align-top" alt="Kitten">
          </b-navbar-brand>
        </div>
        <div class="search">
          <div class="green_window" style="left: 150px">
            <fieldset>
              <input id="query" name="query" type="text" title="검색어 입력"
                     maxlength="255" class="input_text" tabindex="1" accesskey="s"
                     style="ime-mode:active;" autocomplete="off"
                     onclick="document.getElementById('fbm').value=1;" value=""
                     data-atcmp-element="">
            </fieldset>
            <button id="search_btn" type="submit" title="검색" tabindex="3" class="btn_submit"
                    onclick="window.nclick(this,'sch.action','','',event);" style="">
              <span class="blind">검색</span>
              <span class="ico_search_submit"></span>
              <!--          <img src="data:image/jpeg;base64,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"/>-->
            </button>
          </div>
        </div>

        <div class="nav1">
          <div class="nav1 green_window">
            <b-nav class="navc justify-content-center">
              <b-nav-item >Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'header',
  components: {},
  created () {
    // console.log('1')
    // console.log('gdgd', this.$session.get(this.$cookies.get('name')))
    // console.log(this.$cookies.get('session'))
    // if (this.$session.get(this.$cookies.get('name')) !== this.$cookies.get('session')) {
    //   this.$router.push({ path: '/about' })
    // }

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
      list: []
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

</style>
