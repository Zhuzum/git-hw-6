import UserInfo from "./UserInfo";
import CommentWrapper from "./CommentWrapper";

const Comment = (props) => {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="commentWrapper">
      <CommentWrapper >
     <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleDateString()}</div>
     </CommentWrapper>
      </div>
     
    </div>
  );
};

export default Comment;
