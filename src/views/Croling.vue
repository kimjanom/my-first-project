<template>
  <div class="Croling">
    <canvas v-if="chartlist" ref="chart" id="chart" class="statistics-charts-line" width="500" height="400"></canvas>
    <button @click="OnClick">
      크롤링
    </button>
    <button @click="Onclick2">
      스탑
    </button>
    <div>
      <table style="width: 100%;grid-column: 2;grid-row: 2;">
        <thead style="font-family:'Nanum Pen Script', cursive ; font-size: 25px; font-style: ">
        <tr style="border-bottom:1px solid #c6c6c6 ;border-top:1px solid #c6c6c6 ; font-weight: bolder">
          <td style="padding-top: 10px;padding-bottom: 10px">contect</td>
          <td style="padding-top: 10px;padding-bottom: 10px">hash</td>
          <td style="padding-top: 10px;padding-bottom: 10px">이미지</td>
          <td style="padding-top: 10px;padding-bottom: 10px">url</td>
        </tr>
        </thead>
        <tbody>
        <tr style="border-bottom:1px solid #c6c6c6 ;border-top:1px solid #c6c6c6;font-family: 'Roboto Mono', monospace;font-weight: bolder "
            v-for="item in dataList">
          <td>{{ item.contect }}</td>
          <td style="float: left">{{ item.hash }}</td>
          <td><img style="width: 70px; height: 70px" :src="`${item.imageUrl}`"></td>
          <td >{{ item.url }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
var a
var pause = false
export default {
  name: 'Croling',
  data () {
    const map = new Map()
    return {
      percent: null,
      Taglist: [],
      map,
      myChart: null,
      labels: [],
      chartData: [],
      chartlist: [],
      TwitterUrlApi: 'https://twitter.com/i/api/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&send_error_codes=true&simple_quoted_tweet=true&q=%EC%9E%91%EB%8C%80%EA%B8%B0&tweet_search_mode=live&count=20&query_source=typed_query&pc=1&spelling_corrections=1&ext=mediaStats%2ChighlightedLabel%2ChasNftAvatar%2CvoiceInfo%2Cenrichments%2CsuperFollowMetadata%2CunmentionInfo',
      dataList: []
    }
  },
  created () {
    this.takeData()
  },
  mounted () {
    // this.fillData()
  },
  methods: {
    fillData () {
      console.log('아니 왜')
      const img = new Image()
      const ctx = this.$refs.chart.getContext('2d')
      const fillPattern = ctx.createPattern(img, 'repeat')
      if (this.myChart) {
        console.log('업데이트')
        this.myChart.update()
      } else {
        this.myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: this.labels,
            datasets: [{
              label: 'My First Dataset',
              data: this.chartlist,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          },
          options: {
            responsive: false,
            parsing: {
              key: 'nested.value'
            }
          }
        })
      }
    },
    async takeData () {
      this.chartlist = []
      this.chartData.length = []
      this.map.clear()
      this.labels = []
      console.log('양체크', this.chartlist.length)

      await this.$axios
          .post('http://localhost:8081/vue/getData', null, null)
          .then((res) => {
            this.percent = res.data.length
            console.log(res.data.length)
            for (let i = 0; i < res.data.length; i++) {
              const list = this.StringToList(res.data[i].hash)
              for (let j = 0; j < list.length; j++) {
                const valueList = []
                if (this.map.get(list[j])) {
                  this.map.get(list[j]).push(res.data[i])
                  this.map.set(list[j], this.map.get(list[j]))
                } else {
                  valueList.push(res.data[i])
                  this.map.set(list[j], valueList)
                  this.labels.push(list[j])
                }
              }
            }

            const list1 = []
            const listlen = []
            // console.log('aa', this.map.entries())
            // for (const a of this.map.entries()) {
            //   console.log(a[0])
            //   console.log(a[1])
            // }
            this.map.forEach((v, k, m) => {
              list1.push(k)
              // console.log(k)
            })
            // while (this.map.has(this.map.keys().next())) {
            //   console.log('keys:', list1)
            //   list1.push(this.map.keys().next())
            //   this.map = this.map.keys().next()
            // }
            // console.log('리스트:', list1)
            for (const key of list1) {
              // console.log('key:', key)
              // console.log('value:', this.map.get(key))
              listlen.push(this.map.get(key))
            }
            for (const len of listlen) {
              this.chartData.push(len.length)
              console.log('데이터양2:' + this.chartData)
            }
            // console.log('차트', this.chartlist[10])
            // console.log('count: ' + count)
            // console.log(this.labels)
            // console.log(list)
          })
      this.dataSet()
      // console.log('차트', this.chartlist)
      this.fillData()
    },
    OnClick () {
      pause = true
      a = setInterval(this.TwitC, 10000)
    },
    TwitC () {
      if (pause) {
        console.log('시작')
        this.$axios
            .post('http://localhost:8081/vue/crawling', null, {
              params: {
                url: this.TwitterUrlApi
              },
              withCredentials: true
            })
            .then((res) => {
                  console.log('트위터 로그:', res.data)
                  var nextUlr = res.data.shift()
              console.log('팝:', nextUlr)
                  console.log('트위터 로그2:', res.data)
                  this.dataList = res.data
                  this.TwitterUrlApi = nextUlr

                  // console.log('트위터 로그:', res)
                }
            )
      }
    },
    Onclick2 () {
      console.log('멈춰' + pause)
      pause = false
      clearInterval(a)
    },
    StringToList (string) {
      let a = string.replace(/\]/g, '')
      a = a.replace(/\[/g, '')
      a = a.replace(/\s/g, '')
      this.Taglist = a.split(',')
      // console.log(this.Taglist[0])
      // console.log(this.list)
      return this.Taglist
    },
    dataSet () {
      for (let c = 0; c < this.chartData.length; c++) {
        console.log(this.chartData[c] / this.percent * 100)
        this.chartlist.push((this.chartData[c] / this.percent * 100))
      }
    }
  }
}
</script>

<style scoped>

</style>
