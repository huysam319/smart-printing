const express = require("express");
const path = require('path')
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 5050;
const db = require('./src/config/database')
const studentSeeder = require("./src/api/seeders/student.seeder")
const adminSeeder = require("./src/api/seeders/admin.seeder")
const printerSeeder = require("./src/api/seeders/printer.seeder")
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, '/src/api/uploads')));
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./src/api/routes"));
// app.get("*", (req, res) => {
//   res.send("This app is running");
// });
db.sync({ force:true }).then( async (req) => {
  await adminSeeder()
  await studentSeeder()
  await printerSeeder()
  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
});
