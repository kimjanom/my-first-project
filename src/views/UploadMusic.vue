<template>
  <div class="UploadMusic">
    <Header/>
    <div class="uploadTable">
      <div style="grid-column: 2" class="table_row">
        <label>Title</label>
        <span class="ps_box int_id">
          <input v-model="title" style=" border:0 solid black ; width: 340px">
        </span>
        <div style="top:20px; position: relative; width: 100%" class="Select_box">
          <span style="width: 30%!important;   border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;" class="ps_box int_id">
          <input placeholder="카테고리" style=" border:0 solid black ;  width: 100px" v-bind:value="categoty" readonly>
            <button style="position: relative; left: 84px; width: 51px; height: 51px; bottom: 37px" @click=visibleCheck
                    class="cute_button">↓</button>
        </span>
          <div v-if="visibleCategory %2 == 1">
            <span style="width: 30%!important; height: 186px" class="ps_box int_id">
             <div v-for="item in musicGenre" class="option">
              <button @click=changeCategory(item) class="option button">{{ item }}</button>
             </div>
            </span>
          </div>
        </div>
        <div style="position: relative ; right: 160px; top:30px" class="textArea">
          <textarea v-model="content" placeholder="content 입력"></textarea>
        </div>
        <div>
          <h4>앨범이미지</h4>
          <input v- @change='imageTake' class="form-control" type="file" accept="image/*">
          <h4>음원</h4>
          <input v- @change='musicTake' class="form-control" type="file" accept="audio/*">
        </div>
        <button @click="onClick" class="cute_button">업로드</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'UploadMusic',
  components: { Header },
  data () {
    return {
      title: null,
      imageFile: null,
      musicFile: null,
      visibleCategory: 0,
      categoty: '',
      content: '',
      musicGenre: {
        classical_music: 'classical',
        ballad: 'ballad',
        Hip_Hop: 'HipHop',
        disco: 'disco',
        Rock_music: 'Rock',
        k_pop: 'Kpop'
      }
    }
  },
  methods: {
    changeCategory (a) {
      console.log(a)
      var item = a
      this.categoty = item
      this.visibleCategory += 1
      console.log(this.categoty)
      return this.categoty
    },
    visibleCheck (a) {
      this.visibleCategory += 1
    },
    imageTake (e) {
      this.imageFile = e.target.files[0] || e.dataTransfer.files[0]
      console.log('파일 데이터', this.imageFile)
      console.log('파일 데이터', this.categoty)
    },
    musicTake (e) {
      this.musicFile = e.target.files[0] || e.dataTransfer.files[0]
    },
    onClick () {
      console.log(this.title, this.content, this.categoty)
      const formData = new FormData()
      formData.append('image', this.imageFile)
      formData.append('music', this.musicFile)
      console.log(this.title, this.content, this.categoty)
      this.$axios.defaults.headers.post['X-AUTH-TOKEN'] = this.$cookies.get('X-AUTH-TOKEN')
      this.$axios
          .post('http://localhost:8081/upload/media', formData, {
            params: {
              title: this.title,
              content: this.content,
              category: this.categoty
            },
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
      console.log(this.categoty)
    }

  },
  watch: {}
}
</script>

<style scoped>
.uploadTable {
  display: grid;
  grid-template-columns: auto 500px auto;
  grid-template-rows:1000px;
}

.ps_box, .ps_box_disable {
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  background: #fff;
  box-sizing: border-box;
  vertical-align: top;

}

.ps_box.int_id, .ps_box.int_id input {
  background: #fff;
  outline: 0;
}

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

.option.button {
  border: 1px solid #dadada;
  background-color: rgba(0, 0, 0, 0);
  width: 150px;
  font-size: large;
  position: relative;
  right: 15px;
  bottom: 11px;
}

.option.button:hover {
  border: 1px solid #dadada;
  background-color: #505050;
  color: white;
  width: 150px;
  font-size: large;
  position: relative;
  right: 15px;
  bottom: 11px;
}

.cute_button:hover {
  border: 1px solid skyblue;
  background-color: skyblue;
  color: white;
  padding: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

}
</style>
