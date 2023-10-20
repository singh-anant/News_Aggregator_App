import React from "react";
import parse from "html-react-parser";

/* function CommentList({ comment }) {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comments key={comment.id} comment={comment} type="child" />;
  });

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>{comment.text}</div>
      {nestedComments}
    </div>
  );
} */

function CommentList({ comment }) {
  const nestedComments = (comment?.children || []).map((nComment) => {
    return <CommentList key={nComment?.id} comment={nComment} />;
  });
  return (
    <div className="bg-gray-200 rounded-lg border-2 border-black shadow p-1 m-3 w-full ">
      <h1 className="text-base font-semibold">{comment?.author}</h1>
      <p className="break-words">{parse(comment?.text)}</p>
      <div className="flex items-center mt-2 text-lg">
        <p className="text-gray-600 text-sm">
          <span className="font-bold">Published At -</span>
          {comment?.created_at.substring(0, comment?.created_at.indexOf("T"))}
        </p>
      </div>
      {nestedComments}
    </div>
  );
}

const Comments = ({ commentsObj }) => {
  console.log(commentsObj);
  if (!commentsObj) return null;
  return (
    <div className="m-2">
      {commentsObj.map((comment) => {
        return <CommentList key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
