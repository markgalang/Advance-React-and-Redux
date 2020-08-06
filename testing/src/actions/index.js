import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

export function saveComment(newComment) {
  return {
    type: SAVE_COMMENT,
    payload: newComment,
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
