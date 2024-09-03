type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};
const UserDemo = ({ users }: UserDemoProps) => {
  return <div>
    {
      users.map((user) => {
        return <div key={user.id} style={{ border: "1px solid black", margin:"10px 0" }}>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
          <p>{user.email}</p>
        </div>
      })
    }
  </div>;
};

export default UserDemo;
