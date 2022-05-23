<template>
  <div class="about">
    <div>
      <a href="#/main" style="text-decoration: none;">
        <img
            href="#/main"
            id="cat"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTRfNDUg/MDAxNTI2MjgxNzYyODg5.oHk4cQMVLz3pM1k1_ZcWuy9jRZ8tEg0y08u-8B5AeKMg.JefNm06Oxfk2aAQG8gsalulIPVFHG7pFDcQWJRJpHy4g.JPEG.retspe/bn14.jpg?type=w800"
            class="d-inline-block align-top" alt="Kitten">
      </a>
    </div>
    <a href="#/main" style="text-decoration: none;">
      <h1 style="font-family: -apple-system; font-weight: bolder; color: #50bcdf">로그인페이지</h1>
    </a>
    <div class="loginWrapper">
      <li class="panel_item">
        <div class="loginPanner">
          <form @submit.prevent="login" style="grid-column: 2">
            <div class="input_row" style="grid-row: 1; box-shadow: None">
              <input class="input_id_pw" v-model="email" type="email" placeholder="아이디">
            </div>
            <div class="input_row" style="grid-row: 2; box-shadow: None">
              <input class="input_id_pw" v-model="password" type="password" placeholder="비밀번호">
            </div>
            <div style=" margin-top: 100px">
              <b-button class="btn_login" type="submit">로그인</b-button>
            </div>
          </form>
          <div style="grid-row: 3; grid-column: 2">
            <nav style="margin: 10px">
              <a href="#" style="margin: 5px; text-decoration: none;">아이디 찾기</a>|
              <a href="#" style="margin: 5px; text-decoration: none;">비밀번호 찾기</a>|
              <a href="#" style="margin: 5px; text-decoration: none;">회원가입</a>
            </nav>
          </div>
        </div>
      </li>
    </div>

  </div>
</template>
<script>
export default {

  // https://live-everyday.tistory.com/219 글을 참조하여 만들었다
  // axios는 'data'를 query로 변환해주지 않는다고 한다. 'data'란 개발자 도구에서 봤던 dictionary를 말한다. axios에서 매개변수로 변환해주지
  // 않으니 스프링에서는 userId와 password라는 매개변수를 못받았던 것이다!

  // withCredentials
  // 서버의 자세한 코드까지는 설명하는게 과할거 같아 기본적인 logic만 소개를 하자면, 아이디와 비밀번호가 서버로 넘어오면 유저의 정보가 맞는지 확인한 후에 cookie에 token을 발급하게 됩니다.
  // 그 후 다른 페이지에서의 인증도 이 token을 통해 이뤄지게 되죠.
  // 하지만 통신이 아무리 성공적으로 이뤄져 로그인이 성공하더라도 별다른 에러도 없이 인증이 이루어지지 않았습니다.
  // 확인 결과, cookie에 token 값이 정상적으로 들어가지가 않았습니다.
  // 같은 origin의 경우 request header 에 cookie가 추가되는데 orgin이 달라지는 경우 자동으로 추가되지 않아 생기는 문제점이었습니다.
  // 이를 해결하기 위해서는 서버와 클라이언트 둘 다 추가적인 작업이 필요합니다.

  methods: {
    login () {
      console.log('데이터:', this.email)
      this.$axios
          .post('http://localhost:8081/vue/login', null, {
            params: {
              email: this.email,
              password: this.password
            },
            withCredentials: true
          })
          .then((res) => {
            console.log('토큰', res.data)
            // eslint-disable-next-line no-empty
            if (res.data != 'error') {
              // respon
              console.log('로그인 성공')
              // this.$cookies.set('X-AUTH-TOKEN', res.data.token, null, null, null)
              // this.$cookies.config(null, null,null,null, 'X-AUTH-TOKEN', { httpOnly: true })
              var session = (res.data.token + this.$uuidKey())
              this.$cookies.set('name', res.data.name)
              this.$session.set(this.$cookies.get('name'), session)
              this.$cookies.set('session', session)
              this.$cookies.set('email', res.data.email)
              this.$router.push({ path: '/' })
            } else {
            }
          })
    }
  },

  created () {
    console.log('제이', this.$cookies.keys())
  }
}
</script>
<style>
.loginWrapper {
  /*min-width: 684px;*/
  /*margin-right: 30px;*/
  /*margin-left: 30px;*/
  list-style-type: none;
  display: grid;
  grid-template-columns: auto 500px auto;
  grid-template-rows: 50px 400px;

}

.panel_item {
  grid-row: 2;
  grid-column: 2;
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgb(68 68 68 / 4%);
  margin-bottom: 20%;
}

.loginPanner {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto  450px  auto;
  grid-template-rows: 50px 50px 100px 50px;
}

.input_row {
  grid-column: 2;
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  border: 1px solid #dadada;
  padding: 16px 18px 15px;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 0 2px 6px 0 rgb(68 68 68 / 8%);
}

.input_id_pw {
  border: 0 solid black;
  width: 90%;
  position: relative;
  top: -6px;
  outline: none;
}

.btn_login {
  display: block;
  width: 100%;
  padding: 13px 0 13px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, .15);
  background-color: #50bcdf;
  box-sizing: border-box;
  font-size: 20px;
  font-family: Impact, sans-serif, Arial;
  font-weight: bolder;
}

.list_li {
  list-style-type: none;
  float: left;
}
</style>
