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
  if (body.name) {
    return {
      column: "name",
      valueToUpdate: body.name,
    };
  }

  if (body.bannerImg) {
    return {
      column: "banner_img",
      valueToUpdate: body.bannerImg,
    };
  }
  if (body.website) {
    return {
      column: "website",
      valueToUpdate: body.website,
    };
  }
  if (body.location) {
    return {
      column: "location",
      valueToUpdate: body.location,
    };
  }
};

module.exports = checkKey;
