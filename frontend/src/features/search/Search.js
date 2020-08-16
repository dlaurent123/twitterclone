import React, { useEffect, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import SearchInput from "../searchInput/SearchInput";
import Posts from "../posts/Posts";
import back from "../../images/left-arrow.png";
import "./css/search.css";

const Search = () => {
  const { hashtag } = useParams();
  const API = apiUrl();
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const search = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: `${API}/api/hashtags/search/${hashtag}`,
          headers: {
            AuthToken: token,
          },
        });
        // setPosts[res.data.posts];
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [API, token, hashtag]);

  return (
    <div>
      <div className="homeDiv top">
        <div className="feedDiv">
          <div className="feedCont">
            <div className="feedBanner">
              <div className="titleCont">
                <div id="space" className="space sSpace">
                  <img
                    className="backImg"
                    alt=""
                    src={back}
                    onClick={() => history.goBack()}
                  />
                  <SearchInput id={"searchInput"} divId={"searchDiv"} />
                  <div className="extra"></div>
                </div>
              </div>
            </div>

            <div className="postsDivScroll">
              <div className="profileInfo flexC">
                {/* <ProfileInfo user={state.user} /> */}
              </div>
              <Posts
                posts={posts}
                // name={state.user.name}
                // userName={state.user.user_name}
              />
            </div>
          </div>
        </div>
        <div className="searchSide">
          {/* <SearchInput
            id={"sI"}
            divId={"sIDiv"}
            labelClassName={"searchLabel"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
