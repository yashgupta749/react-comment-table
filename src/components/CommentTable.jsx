import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const ITEMS_PER_PAGE = 10;

const CommentTable = ({ comments, posts, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [localComments, setLocalComments] = useState(comments);

  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);

  const filtered = localComments.filter(
    (c) =>
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }
    rangeWithDots.push(...range);
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }
    return rangeWithDots;
  };

  return (
    <div className="comment-table">
      <div className="results-summary">
        <p>
          Showing <span className="highlight">{paginated.length}</span> of{" "}
          <span className="highlight">{filtered.length}</span> comments
        </p>
      </div>

      {/* Mobile Card View */}
      <div className="comment-cards">
        {paginated.map((comment) => (
          <div key={comment.id} className="comment-card">
            <div>
              <label>Email</label>
              <p>{comment.email}</p>
            </div>
            <div>
              <label>Name</label>
              <input
                value={comment.name}
                onChange={(e) => {
                  const updatedComments = localComments.map((c) =>
                    c.id === comment.id ? { ...c, name: e.target.value } : c
                  );
                  setLocalComments(updatedComments);
                  const savedEdits = JSON.parse(
                    localStorage.getItem("editedComments") || "{}"
                  );
                  savedEdits[comment.id] = {
                    ...savedEdits[comment.id],
                    name: e.target.value,
                  };
                  localStorage.setItem(
                    "editedComments",
                    JSON.stringify(savedEdits)
                  );
                }}
              />
            </div>
            <div>
              <label>Comment</label>
              <textarea
                rows="3"
                value={comment.body}
                onChange={(e) => {
                  const updatedComments = localComments.map((c) =>
                    c.id === comment.id ? { ...c, body: e.target.value } : c
                  );
                  setLocalComments(updatedComments);
                  const savedEdits = JSON.parse(
                    localStorage.getItem("editedComments") || "{}"
                  );
                  savedEdits[comment.id] = {
                    ...savedEdits[comment.id],
                    body: e.target.value,
                  };
                  localStorage.setItem(
                    "editedComments",
                    JSON.stringify(savedEdits)
                  );
                }}
              />
            </div>
            <div>
              <label>Post</label>
              <p>
                {posts.find((p) => p.id === comment.postId)?.title ||
                  "Unknown Post"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="comment-table-desktop">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Comment</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((comment) => (
              <TableRow
                key={comment.id}
                comment={comment}
                postTitle={
                  posts.find((p) => p.id === comment.postId)?.title || ""
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              className={
                page === currentPage ? "active" : page === "..." ? "dots" : ""
              }
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentTable;
