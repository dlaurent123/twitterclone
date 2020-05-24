const checkKey = (body) => {
  if (body.userName) {
    return {
      column: "user_name",
      valueToUpdate: body.userName,
    };
  }
  if (body.bio) {
    return {
      column: "bio",
      valueToUpdate: body.bio,
    };
  }
  if (body.avatar) {
    return {
      column: "avatar",
      valueToUpdate: body.avatar,
    };
  }
};

module.exports = checkKey;
