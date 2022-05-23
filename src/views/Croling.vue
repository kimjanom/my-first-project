<template>
  <div class="Croling">
    <button @click="Onclick">
      크롤링
    </button>
  </div>
</template>

<script>
export default {
  name: 'Croling',
  methods: {
    Onclick () {
      this.$axios
          .post('http://localhost:8081/vue/crawling', null, null)
      this.$axios
          .get('https://twitter.com/search?q=%EC%9E%91%EB%8C%80%EA%B8%B0&src=recent_search_click', null, {
            header: {
              'sec-ch-ua-mobile': '?0',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'
            }
          })
          .then((res) => {
            console.log('트위터 로그:', res)
          })
    }
  }
}
</script>

<style scoped>

</style>
