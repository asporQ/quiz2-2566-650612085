export const PostOwner = ({ userImagePath, username, postText, likeNum }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">{username}</span>
      </div>

      <span>{postText}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likeNum}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
