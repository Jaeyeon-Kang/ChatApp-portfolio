const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS 설정
app.use(cors());

// 테스트용 라우트
app.get("/message", (req, res) => {
  res.send({ message: "Express 서버가 Koyeb에서 실행 중입니다!" });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
