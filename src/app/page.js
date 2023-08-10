"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          userImagePath="/profileImages/porpor.jpg"
          username="Tikomporn Luxsanaporkin 650612085"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100 คน"
        />

        {/* map-loop render Comment component here */}

        {comments.map((cmt) => (
          <Comment
            userImagePath={cmt.userImagePath}
            username={cmt.username}
            replyText={cmt.replyText}
            likeNum={cmt.likeNum}
            key={cmt.id}
          />
        ))}
      </div>
    </div>
  );
}
