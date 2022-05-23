// // email.js
//
// const nodemailer = require('nodemailer')
//
// // 본인 Gmail 계정
// const EMAIL = 'alscjf126@naver.com'
// const EMAIL_PW = 'alscjf1004@'
//
// // 이메일 수신자
// let receiverEmail = null
// /* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */
// var generateRandom = function (min, max) {
//   var ranNum = Math.floor(Math.random() * (max - min + 1)) + min
//   return ranNum
// }
// // transport 생성
// let transport = nodemailer.createTransport({
//   service: 'naver',
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PW
//   }
// })
// const number = generateRandom(111111, 999999)
// const auth = {
//   SendEmail: async (req, res) => {
//     const mailOptions = {
//       from: '정욱이네러버덕',
//       to: receiverEmail,
//       subject: '[러버덕]인증 관련 이메일 입니다',
//       text: '오른쪽 숫자 6자리를 입력해주세요 : ' + number
//     }
//   }
// }
