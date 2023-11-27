const app = require("./src/server");
require("dotenv").config();
const { PORT } = process.env;
const { dbConnect } = require("../SERVER/src/config/db");


app.listen(PORT, () => {
  console.log(`Listen at port ${PORT}`);
  dbConnect();
});

