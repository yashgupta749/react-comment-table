import React, { useState, useEffect } from "react";

const TableRow = ({ comment, postTitle }) => {
  const [name, setName] = useState(comment.name);
  const [body, setBody] = useState(comment.body);

  useEffect(() => {
    const savedEdits = JSON.parse(
      localStorage.getItem("editedComments") || "{}"
    );
    savedEdits[comment.id] = { name, body };
    localStorage.setItem("editedComments", JSON.stringify(savedEdits));
  }, [name, body, comment.id]);

  return (
    <tr className="table-row">
      <td className="table-cell">{comment.email}</td>
      <td className="table-cell">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td className="table-cell">
        <textarea
          className="textarea"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </td>
      <td className="table-cell" title={postTitle}>
        {postTitle}
      </td>
    </tr>
  );
};

export default TableRow;
