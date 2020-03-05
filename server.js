const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./services/mysql-service");
const App = express();
const cors = require("cors");
App.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://herokuapp.com",
      "http://herokuapp.com"
    ],
    credentials: true // enable set cookie
  })
);
App.use(bodyParser.json());

App.get("/getmessages", (req, res) => {
  pool.query(
    "SELECT * FROM chatDB ORDER BY ID DESC LIMIT 10",
    (error, results, fields) => { 
      if (error) {
        return res.status(400).send("Error  on getting messages");
      } else {
        res.json(JSON.parse(JSON.stringify(results)));
      }
    }
  );
});
App.post("/addmessage", (req, res) => {

  const { Username, Text, Timestamp } = req.body;
  const sql = `INSERT INTO chatDB (Username, Text ,Timestamp) VALUES ('${Username}', '${Text}' ,${Timestamp})`;

  pool.query(sql, (error, results, fields) => {
   
    if (error) {
      res.status(400).send("Error on adding message");
    } else {
      res.json(results.insertId);
    }
  });
});
const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);

});
