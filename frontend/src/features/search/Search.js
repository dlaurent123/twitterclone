import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";

const Search = () => {
  const { hashtag } = useParams();
  const API = apiUrl();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const search = async () => {
      let res = await axios({
        method: "GET",
        url: `${API}/api/hashtags/search/${hashtag}`,
        headers: {
          AuthToken: token,
        },
      });
      debugger;
      console.log(res);
    };
    search();
  }, [API, token, hashtag]);

  return <div>{hashtag}</div>;
};

export default Search;
