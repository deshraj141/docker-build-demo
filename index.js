const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Docker Build CI is working successfully!");
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});