import { useState } from "react";

const TypingFormEvent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
    setName("");
    setEmail("");
  };
  return (
    <div
      style={{ border: "1px solid black", margin: "10px 0", padding: "10px" }}
    >
      <h2>Create User:</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">
            Name{" "}
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="email">
            Email{" "}
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default TypingFormEvent;
