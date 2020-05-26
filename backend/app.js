const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/users/users");
const postsRouter = require("./routes/posts/posts");
const followsRouter = require("./routes/follows/follows");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/follows", followsRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
