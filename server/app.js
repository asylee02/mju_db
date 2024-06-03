const express = require("express");
const dbConfig = require("./dbConfig");
const oracledb = require("oracledb");
const cors = require("cors");
const morgan = require("morgan");

const question1_ARouter = require("./routers/question1_A");
const question1_BRouter = require("./routers/question1_B");
const question1_cRouter = require("./routers/question1_C");
const app = express();
oracledb.initOracleClient({
  libDir:
    "D:\\instantclient-basic-windows.x64-21.14.0.0.0dbru\\instantclient_21_14",
});
app.use(
  cors({
    origin: "http://localhost:5173", // CORS 허용 도메인 설정
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // 허용할 HTTP 메서드
    credentials: true, // 인증 정보 허용 여부 (쿠키 등)
  })
);

app.use(morgan("dev"));

global.connection = null;

async function initialize() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("데이터베이스 연결 성공");

    // 서버를 여기서 시작합니다.
    const server = app.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  } catch (err) {
    console.error("데이터베이스 연결 실패", err);
  }
}

initialize();
app.use("/question1_A", question1_ARouter);
app.use("/question1_B", question1_BRouter);
app.use("/question1_C", question1_cRouter);

app.get("/", async (req, res) => {
  try {
    const result = await connection.execute(`SELECT * FROM student`);

    // console.log(result);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("데이터베이스 쿼리 실패");
  }
});
