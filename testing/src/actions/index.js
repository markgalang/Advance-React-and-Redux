import { SAVE_COMMENT } from "actions/types";

export function saveComment(newComment) {
  return {
    type: SAVE_COMMENT,
    payload: newComment,
  };
}
