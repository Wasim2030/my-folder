const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   give in url e.g. http://localhost:3000/ + ?name=harry
  // check console of server e.g.  query: { name: 'wasim' },
  //   console.log(res);
  //   console.log(res.query.name);

  //   console.log(req);
  console.log(req.query);
  console.log(req.query.name);
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
