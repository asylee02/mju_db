const express = require("express");
const router = express.Router();

router.get("/year", async (req, res) => {
  const result = await global.connection.execute(`
  Select year AS 학년, COUNT(sno) AS "학생 수"
  from student
  GROUP BY year
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

router.get("/dept", async (req, res) => {
  const result = await global.connection.execute(`
  SELECT DEPT AS "학과명", COUNT(sno) AS "학생 수"
  FROM student
  GROUP BY DEPT
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
