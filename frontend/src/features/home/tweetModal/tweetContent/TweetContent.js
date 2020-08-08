import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../../providers/AuthContext";
import { tweetFunction } from "../../../../util/tweetFunction";
import Button from "../../../login/button/Button";
import { useHistory } from "react-router-dom";
import { updateForm } from "../../../form/FormSlice";
import Input from "../../../login/input/Input";
// import { Editor, EditorState, convertToRaw } from "draft-js";

const TweetContent = () => {
  const [count, updateCount] = useState(0);
  const dispatch = useDispatch();
  const { currentUser, token } = useContext(AuthContext);
  const { id } = currentUser;
  const history = useHistory();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const editor = useRef(null);
  // const contentState = editorState.getCurrentContent();
  // const raw = convertToRaw(contentState).blocks[0].text;

  // const focus = () => {
  //   editor.current.focus();
  // };

  const onChange = (e) => {
    // setEditorState(editorState);

    dispatch(updateForm({ tweet: e.target.value }));
    updateCount(e.target.value.length);
  };

  useEffect(() => {
    // focus();
  }, []);

  return (
    <div className="tweetContent">
      <div className="tweetText">
        <form id="tweetForm">
          {/* <Editor
            ref={editor}
            editorState={editorState}
            onChange={(editorState) => onChange(editorState)}
            placeholder={"What's happening?"}
          /> */}

          <textarea
            onChange={onChange}
            maxLength="250"
            placeholder="What's Happening?"
          />
        </form>
      </div>
      <div className="tweetFooter">
        <div className="tweetAddOns">
          <Input
            keyName={"hash"}
            divId={"hashIn"}
            placeholder={"Hash it up!"}
          />
        </div>
        <div className="tweetCount">
          <span>{count}/250</span>
        </div>
        <div className="tweetModalButtonContainer">
          <Button
            func={() => dispatch(tweetFunction(id, token, history))}
            form={"tweetForm"}
            isDisabled={count === 0 ? true : false}
            bDivId={"tweetModalButton"}
            text={"Tweet"}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetContent;
