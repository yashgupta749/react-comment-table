import React from "react";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Comment Viewer</h1>
        <p>Manage and explore user comments</p>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search comments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
