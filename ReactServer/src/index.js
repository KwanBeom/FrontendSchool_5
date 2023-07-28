import express from "express";
const app = express();
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./components/Home.js";

// 서버가 실행될 포트 설정 (default: 3000)
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));

// app.get(주소, 라우터)
// 주소에 대한 GET 요청이 올 때 수행할 동작 정의
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);

  // HTML 파일로 응답 가능
  // res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
