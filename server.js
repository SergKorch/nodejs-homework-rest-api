const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST, PORT = 3000 } = process.env;
main()
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3001");
    })
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(DB_HOST);
}
