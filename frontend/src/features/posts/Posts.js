import React, { useState } from "react";
import "./css/posts.css";
import img from "../../images/user.png";
import Hashtags from "../hashtags/Hashtags";
import garbage from "../../images/bin.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { useDispatch } from "react-redux";
import { deletePost } from "../../util/deletePost";

const Posts = ({ posts = [], userName, name }) => {
  const { currentUser, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(deletePost(e.target.id, currentUser.id, token));
  };

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
                      <div className="postBodyItems">
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

                      <div
                        name={post.post_id}
                        className={
                          post.user_id === currentUser.id
                            ? "w3-dropdown-hover postDropDownMenu"
                            : "postDropDownMenu"
                        }
                      >
                        <div className="w3-dropdown-content dropDown">
                          <div className="contentCont">
                            <div
                              onClick={onClick}
                              id={post.post_id}
                              className="deleteDiv"
                            >
                              <img id={post.post_id} alt="" src={garbage} />
                              <span id={post.post_id}>Delete</span>
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
      </div>
    );
  });
};

export default Posts;
