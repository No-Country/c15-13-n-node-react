const server = require("./src/server");
require("dotenv").config();
const { PORT } = process.env;

// conn.sync({ force: true }).then(() => {
server.listen(3001, () => {
  console.log(`Listen at port 3001`);
});
// });
