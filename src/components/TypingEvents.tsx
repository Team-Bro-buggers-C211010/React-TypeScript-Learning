import React, { useState } from "react";

const TypingEvents = () => {
  const [userName, setUserName] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setClicked(!clicked);
  };
  return (
    <div
      style={{ border: "1px solid black", margin: "10px 0", padding: "10px" }}
    >
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="Enter User Name"
        value={userName}
        onChange={handleUserName}
      />
      <button onClick={handleClicked}>
        {clicked ? "Hide Name" : "Show Name"}
      </button>
      {clicked && <p>{userName}</p>}
    </div>
  );
};

export default TypingEvents;
