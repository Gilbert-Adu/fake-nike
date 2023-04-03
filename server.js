const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.sendFile("./src/App.vue");
});
app.listen(port);
