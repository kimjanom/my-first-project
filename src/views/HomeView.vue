<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-button @click.prevent="logout">logout
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    logout: function () {
      console.log('gdgd', this.$session.get(this.$cookies.get('name')))
      console.log('gdgd', this.$cookies.get('session'))
      console.log('세션 취소')
      this.$session.destroy()
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
    },
    created () {
      console.log('gdgd', this.$session.get(this.$cookies.get('name')))
      console.log(this.$cookies.get('session'))
      if (this.$session.get(this.$cookies.get('name')) !== this.$cookies.get('session')) {
        this.$router.push({ path: '/about' })
      }
    }

  }

}
</script>
