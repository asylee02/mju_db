const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await global.connection.execute(`
  select *
  FROM AUTHOR
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

router.get("/:author", async (req, res) => {
  const name = req.params.author;

  const result = await global.connection.execute(
    `
  SELECT title, SUM(num) as 재고량
  FROM written_by NATURAL JOIN BOOK NATURAL JOIN STOCKS
  WHERE name = :name
  GROUP BY title
`,
    [name]
  );

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
