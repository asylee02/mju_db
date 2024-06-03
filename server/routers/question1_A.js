const express = require("express");
const router = express.Router();

router.get("/student", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM student`);
  const title = [];x  
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

router.get("/professor", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM professor`);
  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

router.get("/course", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM course`);
  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

router.get("/enroll", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM enroll`);
  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

router.get("/lecture", async (req, res) => {
  const result = await global.connection.execute(`SELECT * FROM lecture`);
  const title = [];
  result.metaData.forEach((item) => {
    title.push(item.name);
  });
  const data = [title, result.rows];
  res.send(data);
});

module.exports = router;
