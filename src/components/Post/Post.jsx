import React, { useState, useEffect } from "react";
import "./post.css";

// Define posts outside so they are not recreated on every render
const initialPosts = [
  {
    id: 1,
    name: "Niwantha Niluka",
    time: "5 min ago",
    caption:
      "Hello, I am Niwantha Niluka. I am an Undergraduate university Student. I love to code and create new things 🚀.",
    image: "/images/2.jpg",
    profile: "/images/2.jpg",
  },
  {
    id: 2,
    name: "Emily Carter",
    time: "10 August at 17:55",
    caption: "Exploring the beauty of nature this weekend! 🌿",
    image: "/images/nature.jpeg",
    profile: "/images/profile/profile2.jpeg",
  },
  {
    id: 3,
    name: "Mark Zuckerberg✅",
    time: "30 min ago",
    caption: "Working on a new web design project. Feeling inspired! 💻",
    image: "/images/3.jpeg",
    profile: "/images/profile/profile3.jpg",
  },
  {
    id: 4,
    name: "Auto Garage",
    time: "1 hr ago",
    caption: "Painted in passion, built for speed. 🔥🚗💨",
    image: "/images/4.jpeg",
    profile: "/images/profile/profile4.jpg",
  },
];

const reactionIcons = [
  { src: "/images/like.png", alt: "Like" },
  { src: "/images/love.png", alt: "Love" },
  { src: "/images/sad.png", alt: "Sad" },
  { src: "/images/wow.png", alt: "Wow" },
  { src: "/images/angry.png", alt: "Angry" },
];

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    // Load posts only once (from localStorage if you want persistence)
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || initialPosts;
    setPosts(savedPosts);
    setLikes(savedPosts.map(() => 0));
    setComments(savedPosts.map(() => []));
    setNewComments(savedPosts.map(() => ""));
  }, []);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleCommentChange = (index, value) => {
    const updatedNewComments = [...newComments];
    updatedNewComments[index] = value;
    setNewComments(updatedNewComments);
  };

  const handleCommentSubmit = (e, index) => {
    e.preventDefault();
    if (newComments[index].trim()) {
      const updatedComments = [...comments];
      updatedComments[index] = [...updatedComments[index], newComments[index]];
      setComments(updatedComments);

      const updatedNewComments = [...newComments];
      updatedNewComments[index] = "";
      setNewComments(updatedNewComments);
    }
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} className="post">
          {/* Top Section */}
          <div className="postTop">
            <img src={post.profile} alt="Profile" className="postImage" />
            <div className="postInfo">
              <span className="postUserName">{post.name}</span>
              <span className="postTime">{post.time}</span>
            </div>
          </div>

          {/* Caption */}
          <div className="postCaption">{post.caption}</div>

          {/* Uploaded Image */}
          <img src={post.image} alt="Post" className="postedImage" />

          {/* Bottom Section */}
          <div className="postBottom">
            <div className="postReactions">
              {reactionIcons.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  className="reactionIcon"
                  onClick={() => handleLike(index)}
                />
              ))}
              <span className="likeCount">{likes[index]} likes</span>
            </div>
            <div className="commentCount">
              {comments[index].length} comments
            </div>
          </div>

          {/* Comment Section */}
          <div className="commentSection">
            {comments[index].map((c, idx) => (
              <p key={idx} className="comment">
                {c}
              </p>
            ))}
            <form onSubmit={(e) => handleCommentSubmit(e, index)}>
              <input
                type="text"
                value={newComments[index]}
                onChange={(e) => handleCommentChange(index, e.target.value)}
                placeholder="Write a comment..."
              />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
