import { useState } from "react";

const UseStateHooksProps = () => {
  // type is automatically inferred as number
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
  };
  const [users, setUsers] = useState<null | User>(null);
  //optional chaining korte hobe na
  // type assertion - without optional chaining operator
  const [user2] = useState<User>({} as User);
  const handleAddUser = () => {
    setUsers({
      id: 1,
      name: "Shovan Bhattacharjee",
      email: "shovan@gmail.com",
      age: 26,
    });
    console.log(users);
  };
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Count: {count}</h2>
      <h2>Users: {users?.name || "No Users Here"}</h2>
      <h2>Users: {user2.name || "No Users Here"}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleAddUser}>Add User</button>{" "}
      <button onClick={() => setUsers(null)}>Remove User</button>
    </div>
  );
};

export default UseStateHooksProps;
