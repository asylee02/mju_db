const express = require("express");
const router = express.Router();

router.get("/student", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM  student   `);
  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  console.log(result.rows);
  res.send(data);
});

router.get("/:name", async (req, res) => {
  const name = req.params.name;
  console.log(name);
  const result = await global.connection.execute(
    `SELECT cname, Grade, WXAM
     FROM student NATURAL JOIN enroll NATURAL JOIN course
     WHERE sname = :name`,
    [name]
  );

  console.log(result);

  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

module.exports = router;
