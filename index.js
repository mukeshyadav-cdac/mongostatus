const express = require('express')
const app = express()
const port = 3000

const { exec } = require("child_process");



app.get('/', (req, res) =>  {
  exec("pgrep mongod", (error, stdout, stderr) => {
      if (error) {
          return res.status(500).send('mongodb not working')
      } else if (stderr) {
          return res.status(500).send('mongodb not working')
          return;
      } else {
        return res.send(stdout)
      }
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
