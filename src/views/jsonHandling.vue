<!--<template>-->
<!--  <div class="jsonHandling">-->
<!--    <div>-->
<!--      <table>-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <td>좌표</td>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr style="border-bottom:1px solid #c6c6c6 ;border-top:1px solid #c6c6c6;" v-for="item in this.skeletonData">-->
<!--          <td>{{ item }}</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--import skeleton from '@/assets/data/10.json'-->
<!--import json from '@/assets/data/C011_A01_SY01_P01_S01_01DBS.json'-->

<!--export default {-->
<!--  name: 'jsonHandling',-->
<!--  methods: {-->
<!--    jsonHandle () {-->
<!--      this.$axios-->
<!--          .post('http://localhost:8081/vue/jsonHandle', JSON.stringify(json), {-->
<!--            headers: {-->
<!--              'Content-Type': 'application/json'-->
<!--            },-->
<!--            withCredentials: true-->
<!--          })-->
<!--    },-->
<!--    getJsonData () {-->
<!--      var a = 0-->
<!--      var i = 0-->
<!--      var count = 0-->
<!--      // console.log(skeleton)-->
<!--      for (count; skeleton[count] != null; count += 1) {-->
<!--        this.skeletonData.push(skeleton[count].persons[0].keypoints)-->
<!--        for (i = 0; this.skeletonData[i] != null; i += 1) {-->
<!--          // console.log(this.skeletonData[i])-->
<!--          for (a = 0; this.skeletonData[i][a] != null; a += 1) {-->
<!--            // console.log(this.skeletonData[i][a])-->
<!--            this.xPoint.push(this.skeletonData[i][a][0])-->
<!--            this.yPoint.push(this.skeletonData[i][a][1])-->
<!--          }-->
<!--        }-->
<!--        // console.log(this.skeletonData)-->
<!--      }-->
<!--      console.log('x축 모음', this.xPoint)-->
<!--      console.log('y축 모음', this.yPoint)-->
<!--      console.log(count)-->
<!--    }-->
<!--  },-->
<!--  created () {-->
<!--    // this.getJsonData()-->
<!--    this.jsonHandle()-->
<!--  },-->
<!--  data () {-->
<!--    var skeletonData = []-->
<!--    var xPoint = []-->
<!--    var yPoint = []-->
<!--    return {-->
<!--      skeletonData,-->
<!--      xPoint,-->
<!--      yPoint-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
