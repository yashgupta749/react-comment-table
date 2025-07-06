import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CommentTable from "./components/CommentTable";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [commentsRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/comments"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);
        const commentsData = await commentsRes.json();
        const postsData = await postsRes.json();

        const savedEdits = JSON.parse(
          localStorage.getItem("editedComments") || "{}"
        );

        const mergedComments = commentsData.map((comment) => {
          if (savedEdits[comment.id]) {
            return { ...comment, ...savedEdits[comment.id] };
          }
          return comment;
        });

        setComments(mergedComments);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="app-bg app-loading">
        <div className="loading-center">
          <div className="spinner"></div>
          <p>Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-bg">
      <div className="container">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CommentTable
          comments={comments}
          posts={posts}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default App;
