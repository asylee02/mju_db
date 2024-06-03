const express = require("express");
const router = express.Router();

router.get("/student", async (req, res) => {
  const result = await global.connection.execute(`
    SELECT 
      S.SNO,
      S.SNAME,
      E.CNO,
      E.WXAM,
      E.GRADE,
      CORRECT_GRADE
    FROM (
      SELECT 
        E.SNO,
        E.CNO,
        E.WXAM,
        E.GRADE,
        CASE
          WHEN E.WXAM >= 90 THEN 'A'
          WHEN E.WXAM >= 80 THEN 'B'
          WHEN E.WXAM >= 70 THEN 'C'
          WHEN E.WXAM >= 60 THEN 'D'
          ELSE 'F'
        END AS CORRECT_GRADE
      FROM 
        Enroll E
    ) E
    JOIN 
      Student S
    ON 
      S.SNO = E.SNO
    WHERE 
      E.GRADE != E.CORRECT_GRADE
  `);

  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  console.log(result.rows);
  res.send(data);
});
router.patch("/student/edit/:id", async (req, res) => {
  const sno = req.params.id;
  const result = await global.connection.execute(
    `
    UPDATE Enroll
    SET GRADE = CASE
      WHEN WXAM >= 90 THEN 'A'
      WHEN WXAM >= 80 THEN 'B'
      WHEN WXAM >= 70 THEN 'C'
      WHEN WXAM >= 60 THEN 'D'
      ELSE 'F'
    END
    WHERE SNO = :sno
    AND GRADE != CASE
      WHEN WXAM >= 90 THEN 'A'
      WHEN WXAM >= 80 THEN 'B'
      WHEN WXAM >= 70 THEN 'C'
      WHEN WXAM >= 60 THEN 'D'
      ELSE 'F'
    END
  `,
    [sno]
  );

  res.end();
});

module.exports = router;
