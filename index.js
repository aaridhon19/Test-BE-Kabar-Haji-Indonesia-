if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  const express = require("express");
  const app = express();
  const port = process.env.PORT;
  const router = require("./routers/index");
  
  const cors = require('cors')
  app.use(cors())
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.get("/", (req, res) => {
    console.log("Test Masuk");
    res.status(200).json({
      message: "Test Masuk",
    });
  });
  
  app.use(router);
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  module.exports = app;
  