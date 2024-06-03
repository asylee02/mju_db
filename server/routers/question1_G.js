const express = require("express");
const router = express.Router();

router.get("/course", async (req, res) => {
  const result = await global.connection.execute(`
  select PDEPT as 학과명, COUNT(CNO) as 개설_강좌수
  from lecture natural join professor
  GROUP BY PDEPT
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
