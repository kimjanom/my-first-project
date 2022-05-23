<template>
  <div class="register">
    <div>
      <a href="#/main" style="text-decoration: none;">
        <img
            style="background-color: #c6c6c6"
            href="#/main"
            id="cat"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTRfNDUg/MDAxNTI2MjgxNzYyODg5.oHk4cQMVLz3pM1k1_ZcWuy9jRZ8tEg0y08u-8B5AeKMg.JefNm06Oxfk2aAQG8gsalulIPVFHG7pFDcQWJRJpHy4g.JPEG.retspe/bn14.jpg?type=w800"
            class="d-inline-block align-top" alt="Kitten">
      </a>
    </div>
    <a href="#/main" style="text-decoration: none;">
      <h1 style="font-family: -apple-system; font-weight: bolder; color: #50bcdf">회원가입</h1>
    </a>
    <div class="container">
      <div class="row-group">
        <div class="join_row">
          <div style="margin-bottom: 30px">
            <h4 style="position: relative; right: 195px">아이디</h4>
            <span class="ps_box int_id">
          <input style=" border:0 solid black ; width: 340px" @blur="checkId" v-model="signup.email" type="email"
                 id="email"
                 name="email"
                 maxlength="20">
        </span>
            <div style="color: red" v-if="idCheck == 0">필수 입력칸 입니다</div>
            <div style="color: red" v-if="idCheck == 2">최소4자리 최대20자리까지 입력해주십시오</div>
            <div style="color: red" v-if="idCheck == 3">이미 존재하는 아이디 입니다.</div>
          </div>
          <div style="margin-bottom: 30px">
            <h4 style="position: relative; right: 185px">비밀번호</h4>
            <span class="ps_box int_id">
          <input v-model="signup.password" @blur="passwordValid" style="border:0 solid black ; width: 340px" type="text"
                 id="password" name="password" maxlength="20">
              <div v-if="passwordValidFlag == 0">
                <span style="!important; background-position: -27px -27px" class="login_image"></span>
              </div>
              <div v-else>
                 <span style="!important; background-position: 0px 0px" class="login_image"></span>
                <div v-if="passwordValidFlag == 2">
                  <span style="!important; background-position: -27px -27px" class="login_image"></span>
                </div>
                 <div v-else-if="passwordValidFlag == 1">
                   <span style="!important; background-position: -54px -0px" class="login_image"></span>
                 </div>
              </div>
        </span>
            <div style="color: red" v-if="passwordValidFlag == 0"> 필수 입력칸 입니다.</div>
            <div style="color: red" v-if="passwordValidFlag == 2"> 유효하지 않은 비밀번호 입니다.</div>
          </div>
          <div style="margin-bottom: 30px">
            <h4 style="position: relative; right: 160px">비밀번호 확인</h4>
            <span class="ps_box int_id">
          <input v-model="signup.check" @blur="checkpassword" style="border:0 solid black ; width: 340px" type="text"
                 maxlength="20">
              <div v-if="passwordCheck == null">
                <span style="!important; background-position: 0px 0px" class="login_image"></span>
              </div>
                            <div v-else>
                <div v-if="passwordCheck == 2 || passwordCheck == 0">
                  <span style="!important; background-position: -27px -27px" class="login_image"></span>
                </div>
                 <div v-else-if="passwordCheck == 1">
                   <span style="!important; background-position: -54px -0px" class="login_image"></span>
                 </div>
              </div>
        </span>
            <div style="color: red" v-if="passwordCheck == 0">필수 입력칸 입니다.</div>
            <div style="color: red" v-if="passwordCheck == 2">비밀번호가 일치하지 않습니다</div>
          </div>
          <div style="margin-bottom: 30px">
            <h4 style="position: relative; right: 205px">이름</h4>
            <span class="ps_box int_id">
          <input v-model="signup.username" @blur="nameValid" style="border:0 solid black ; width: 340px" type="text"
                 id="name" name="name" maxlength="20">
              </span>
            <div style="color: red" v-if="nameValidFlag == 0">필수 입력칸 입니다.</div>
          </div>
          <div>
            <h4 style="position: relative; right: 170px">이메일 인증</h4>
            <span style="" class="ps_box int_id">
            <input v-model="receivEmail" style="border:0 solid black; grid-column: 1 ;width: 340px" type="text">
            <button class="cute_button" style="position: absolute;top: 15%;right: 13px;"
                    @click="testSendEmail">인증메일 보내기</button>
              </span>
            <div v-if="ePw != null">
              <h4 style="position: relative; right: 160px">인증번호 입력</h4>
              <span :style="[epwValidFlag ? {'border': 'solid 1px #dadada'}:{}]" class="ps_box int_id">
              <input v-model="ePwCheck" style="border:0 solid black; grid-column: 1 ;width: 340px" type="text">
              <button  class="cute_button"
                      style=" position: absolute;top: 15%;right: 13px;"
                      @click="emailEpwCheck">인증
              </button>
                </span>
              <div  style="  color: #42b983" v-if="epwValidFlag == true">인증 완료</div>
              <div style="color: #42b983" v-if="epwValidFlag == false">인증번호가 틀렷습니다</div>
            </div>
          </div>
          <div id="register_button">
            <button class="cute_button" @click="register">
              회원가입
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'register',
  data () {

    return {
      signup: {
        username: null,
        email: null,
        password: null,
        pwhint: '',
        pwhintans: null,
        check: null

      },
      passwordValidFlag: null,
      passwordCheck: null,
      idCheck: null,
      nameValidFlag: null,
      receivEmail: null,
      checker: false,
      ePw: null,
      ePwCheck: null,
      epwValidFlag: null,
      color: '#dadada'
    }
  },

  methods: {
    emailEpwCheck () {
      if (this.ePw === this.ePwCheck) {
        this.epwValidFlag = true
        this.color = '#42b983'
      } else {
        this.epwValidFlag = false
        this.color = 'red'
      }
    },
    testSendEmail () {
      this.$axios
          .post('http://localhost:8081/vue/emailConfirm', null, {
            params: {
              email: this.receivEmail
            }
          }).then((res) => {
        console.log(res.data)
        this.ePw = res.data
      })
    },
    nameValid () {
      if (this.signup.username == null || this.signup.username === '') {
        this.nameValidFlag = 0
      } else {
        this.nameValidFlag = 1
      }
    },
    checkpassword () {
      if (this.signup.check == null || this.signup.check === '') {
        this.passwordCheck = 0
      }
      if (this.signup.password === this.signup.check) {
        this.passwordCheck = 1
      } else {
        this.passwordCheck = 2
      }
    },
    passwordValid () {
      if (this.signup.password == null || this.signup.password === '') {
        this.passwordValidFlag = 0
      } else {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)) {
          this.passwordValidFlag = 1
        } else {
          this.passwordValidFlag = 2
        }
      }
    },
    checkId () {
      if (this.signup.email == null || this.signup.email === '') {
        this.idCheck = 0
      } else {
        if (/^[a-zA-Z0-9_]{4,20}$/.test(this.signup.email)) {
          console.log('1')
          this.idCheck = 1
        } else {
          console.log('2')
          this.idCheck = 2
        }
      }
    },
    register () {
      if (this.idCheck === 1 && this.passwordCheck === 1 && this.passwordValidFlag === 1 && this.nameValidFlag === 1 && this.epwValidFlag === true) {
        this.$axios
            .post('http://localhost:8081/vue/register', null, {
              params: {
                email: this.signup.email + '@bonobono.com',
                username: this.signup.username,
                password: this.signup.password,
                checkEmail: this.receivEmail
              }
            }).then((res) => {
          if (res) {
            alert('회원가입 성공')
            console.log('회원가입 성공')
            this.$router.push({ path: '/' })
            console.log('회원가입 성공')
          } else {
            this.idCheck = 3
          }
        })
      } else {
        if (this.idCheck == null) {
          this.idCheck = 0
        }
        if (this.passwordCheck == null) {
          this.passwordCheck = 0
        }
        if (this.passwordValidFlag == null) {
          this.passwordValidFlag = 0
        }
        if (this.nameValidFlag == null) {
          this.nameValidFlag = 0
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 500px auto;
  grid-template-rows:1000px;

}

.row-group {
  position: relative;
  grid-column: 2;
}

.join_row {
  position: relative;
  float: left;
  left: 20px;

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

.register {
  /*background-color: #dae1e6;*/
}

.login_image {
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 13px;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  background-image: url(https://static.nid.naver.com/images/ui/join/m_icon_pw_step.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 125px 75px;
  cursor: pointer;
}

.background_position {
  background-position: -27px -27px !important;
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
