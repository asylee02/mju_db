const express = require("express");
const router = express.Router();

router.get("/course", async (req, res) => {
  const result = await global.connection.execute(`
  WITH Grade_Categories AS (
    SELECT 
        c.cname as 강의_제목,
        AVG(TO_NUMBER(e.wxam)) AS 시험점수_평균,
        SUM(CASE WHEN TO_NUMBER(e.wxam) >= 90 THEN 1 ELSE 0 END) AS count_A,
        SUM(CASE WHEN TO_NUMBER(e.wxam) >= 80 AND TO_NUMBER(e.wxam) < 90 THEN 1 ELSE 0 END) AS count_B,
        SUM(CASE WHEN TO_NUMBER(e.wxam) >= 70 AND TO_NUMBER(e.wxam) < 80 THEN 1 ELSE 0 END) AS count_C,
        SUM(CASE WHEN TO_NUMBER(e.wxam) >= 60 AND TO_NUMBER(e.wxam) < 70 THEN 1 ELSE 0 END) AS count_D,
        SUM(CASE WHEN TO_NUMBER(e.wxam) < 60 THEN 1 ELSE 0 END) AS count_F
    FROM 
        enroll e
    JOIN 
        course c ON e.cno = c.cno
    GROUP BY 
        e.cno, c.cname
)
SELECT 
    강의_제목,
    시험점수_평균,
    count_A,
    count_B,
    count_C,
    count_D,
    count_F
FROM 
    Grade_Categories
  `);

  const title = [];
  console.log(result);
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  console.log(result.rows);
  res.send(data);
});

module.exports = router;
