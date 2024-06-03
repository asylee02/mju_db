const express = require("express");
const router = express.Router();

router.get("/max", async (req, res) => {
  const result = await global.connection.execute(`
  SELECT cno, cname, wxam, sno, sname, year, dept
  FROM enroll natural join student natural join course
  WHERE (cno, TO_NUMBER(wxam)) IN (
      SELECT cno, MAX(TO_NUMBER(wxam))
      FROM enroll
      GROUP BY cno
  )
  ORDER BY cno
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

router.get("/min", async (req, res) => {
  const result = await global.connection.execute(`
  SELECT cno, cname, wxam, sno, sname, year, dept
  FROM enroll natural join student natural join course
  WHERE (cno, TO_NUMBER(wxam)) IN (
      SELECT cno, MIN(TO_NUMBER(wxam))
      FROM enroll
      GROUP BY cno
  )
  ORDER BY cno  
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
