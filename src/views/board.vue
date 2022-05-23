<template>
  <div class="board">
    <Header/>
    <!--    <div id="drop_the_text">-->
    <!--      <input type="text" placeholder="Add List" id="write_list">-->
    <!--    </div>-->
    <div class="wrapper">
      <div style="grid-row: 2 !important;" class="column_left">
        <div>
          <table style="width: 100%;grid-column: 2;grid-row: 2;">
            <thead style="font-family:'Nanum Pen Script', cursive ; font-size: 25px; font-style: ">
            <tr style="border-bottom:1px solid #c6c6c6 ;border-top:1px solid #c6c6c6 ; font-weight: bolder">
              <td style="padding-top: 10px;padding-bottom: 10px">NO</td>
              <td style="padding-top: 10px;padding-bottom: 10px"></td>
              <td style="padding-top: 10px;padding-bottom: 10px;float: left; left: 100px;position: relative">곡정보</td>
              <td style="padding-top: 10px;padding-bottom: 10px;position: relative;right: 150px">카테고리</td>
              <td style="padding-top: 10px;padding-bottom: 10px">조회수</td>
            </tr>
            </thead>
            <tbody>
            <tr style="border-bottom:1px solid #c6c6c6 ;border-top:1px solid #c6c6c6;font-family: 'Roboto Mono', monospace;font-weight: bolder "
                v-for="item in paginatedData">
              <td>{{ popc() }}</td>
              <td><img style="width: 70px; height: 70px" :src="`http://localhost:8081/imageLink/+${item.id}.com`"></td>
              <td style="float: left">{{ item.fileOriginalName }}+{{ item.name }}</td>
              <td style="right: 150px;position:relative;">{{ item.category }}</td>
              <td>{{ item.views }}</td>
            </tr>
            </tbody>
          </table>
          <div class="paging">
            <button :disabled="pageNum === 0" @click="prevPage" class="cute_button">
              <a>< 이전</a>
            </button>
            <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
            <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="cute_button">
              <a>다음 ></a>
            </button>
          </div>
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
var a = 0
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
import Header from '@/components/header.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'board',
  components: { Header },
  'created' () {
    // console.log('1')
    // console.log('gdgd', this.$session.get(this.$cookies.get('name')))
    // console.log(this.$cookies.get('session'))
    // if (this.$session.get(this.$cookies.get('name')) !== this.$cookies.get('session')) {
    //   // this.$router.push({ path: '/about' })
    // }
    this.getTable()
    this.checkPage()
    this.i = 0
    a = 0
  },
  // get 과 post 가 요청 한 헤드 를 사용 하 는 Cookie 헤드 가 다르다
  // 는 것 을 알 수 있 습 니 다. get 요청 은 처음에 쿠키 헤드 필드 가 없 었 고
  // post 요청 은 항상 쿠키 헤드 필드 가 있 었 습 니 다. 그 쿠키 는 JSESSIONID 입 니 다.
  'mounted' () {
  },

  data: function () {
    const images = ['https://artlist-dev.imgix.net/artlist/personal-plan-hero-desktop.jpg?auto=format&w=1920&h=auto',
      'http://src.hidoc.co.kr/image/lib/2017/7/25/20170725100648387_0.jpg',
      'https://www.thedailypost.kr/news/photo/201903/67271_60073_631.png'
    ]
    const name = this.$cookies.get('name')
    const currentNumber = 0
    const timer = null
    const listArray = []
    const i = 0
    // 페이지 사이즈를 갖는 변수
    let pagesize
    // 몇개를 기준으로 페이지를 자르는 변수
    const cutsize = 5
    // 현재 사이트 번호
    let currentSite
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
      listArray,
      i,
      pagesize,
      pageSize: 4,
      cutsize,
      currentSite,
      pageNum: 0,
      pagec: 1,
      count: [0, 1, 2]
    }
  },
  // props: {
  //   listArray: {
  //     type: Array,
  //     required: true
  //   },
  //   pageSize: {
  //     type: Number,
  //     required: false,
  //     default: 10
  //   }
  // },
  computed: {

    pageCount () {
      const listLeng = this.listArray.length
      console.log('길이', listLeng)
      const listSize = this.pageSize
      const page = Math.floor((listLeng - 1) / listSize) + 1

      return page
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      console.log('start:', start)
      console.log('end:', end)
      console.log('리스트 슬라이스:', this.listArray.slice(start, end))
      return this.listArray.slice(start, end)
    }
  },
  methods:
      {
        chekc () {
          console.log('a')
        },
        popc () {
          a += 1
          // this.i += 1
          // console.log(this.i)
          // console.log(a)
          return a
        },
        'nextPage' () {
          this.pageNum += 1
          a = this.pageNum * this.pageSize
        },
        'prevPage' () {
          this.pageNum -= 1
          a = this.pageNum * this.pageSize
        },
        'checkPage' () {
          if (this.$route.query.currentSite == null) {
            this.currentSite = 1
          } else {
            this.currentSite = this.$route.query.currentSite
          }
        },
        // 'getCount' () {
        //   var c = 1
        //   for (var i in this.listArray) {
        //     // this.count.push(c)
        //     console.log('aaa', this.listArray)
        //     // c++
        //   }
        //   return this.count
        // },
        'end' () {
          // console.log('end', this.pagec+=1)
        },
        'goDetail' (item) {
          console.log('아이템', item)
          this.$router.push({
            name: 'album',
            query: {
              id: item[3],
              name: 'aaa'
            }
          })
        },
        'getTable' () {
          // const varr = Array.from(Array(5), () => Array(4).fill(null))
          this.$axios
              .post('http://localhost:8081/vue/board', null, { withCredentials: true })
              .then((res) => {
                    this.listArray = res.data
                    console.log('리스트:', this.listArray)
                    // console.log('길이:', this.listArray.length)
                    // this.pagesize = Math.round(this.list.length / this.cutsize)
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
.cute_button {
  border: 1px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: skyblue;
  padding: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

}
</style>
