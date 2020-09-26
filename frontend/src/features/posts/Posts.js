import React from "react";
import "./css/posts.css";
import img from "../../images/user.png";
import Hashtags from "../hashtags/Hashtags";

const Posts = ({ posts = [], userName, name }) => {
  return posts.map((post) => {
    return (
      <div className="posts" key={post.post_id}>
        <div className="postsLayer2">
          <div className="postsContainer">
            <div className="article">
              <div className="articleConts">
                <div className="mainPostsDiv">
                  <div className="postBody">
                    <div className="postBodySpace"></div>
                    <div className="postBodyCont">
                      <div className="postAvy">
                        <div className="postAvyCont">
                          <img alt="" style={{ height: "45px" }} src={img} />
                        </div>
                      </div>

                      <div className="postText">
                        <div className="postTitle">
                          <div className="postTitleCont">
                            <div className="postTitleTain">
                              <div className="postTitleItems">
                                <div className="itemsHolder">
                                  <span
                                    style={{
                                      color: "white",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {name !== undefined ? name : post.name}
                                  </span>
                                  <span
                                    style={{
                                      flexShrink: 1,
                                      marginLeft: "5px",
                                    }}
                                  >
                                    @
                                    {userName !== undefined
                                      ? userName
                                      : post.user_name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="postTextCont">
                          <div className="pTexts">
                            <span
                              style={{
                                fontWeight: "400",
                                fontSize: "15px",
                                color: "rgb(255, 255, 255)",
                              }}
                            >
                              {post.post_body}
                            </span>

                            <Hashtags hashtags={post.tags ? post.tags : []} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Posts;
