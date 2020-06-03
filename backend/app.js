const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/users/users");
const postsRouter = require("./routes/posts/posts");
const followsRouter = require("./routes/follows/follows");
const likesRouter = require("./routes/likes/likes");
const hashtagsRouter = require("./routes/hashtags/hashtags");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/follows", followsRouter);
app.use("/api/likes", likesRouter);
app.use("/api/hashtags", hashtagsRouter);

const handle = (err, req, res, next) => {
  if (!err.received) {
    res.status(200).json({
      status: 200,
      message: "email do not exist",
      user: false,
    });
  } else {
    res.status(400).json({ status: 404, message: "not found" });
  }
};

app.use(handle);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
