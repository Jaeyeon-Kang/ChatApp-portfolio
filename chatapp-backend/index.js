const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // CORS 설정 추가

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
