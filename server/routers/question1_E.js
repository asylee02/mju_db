const express = require("express");
const router = express.Router();

router.get("/student", async (req, res) => {
  const result = await global.connection.execute(`
  SELECT sname as 학생이름, SUM(CREDIT) as 총학점, AVG(WXAM) as 시험성적_평균
FROM student NATURAL JOIN enroll natural join course
GROUP BY sname
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
