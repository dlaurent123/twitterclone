const app = require("express")();
const bodyParser = require("body-parser");
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
