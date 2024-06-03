const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await global.connection.execute(`
  select *
  FROM PUBLISHER
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

router.get("/:publisher", async (req, res) => {
  const publisher = req.params.publisher;

  const result = await global.connection.execute(
    `
    SELECT 
    title AS 제목, 
    price AS 가격, 
    CASE 
        WHEN SUM(num) = 0 THEN '없음'
        ELSE TO_CHAR(SUM(num))
    END AS 재고량
FROM 
    published_by 
    NATURAL JOIN Book 
    NATURAL JOIN STOCKS
where name = :publisher
GROUP BY 
    title, 
    price
`,
    [publisher]
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
