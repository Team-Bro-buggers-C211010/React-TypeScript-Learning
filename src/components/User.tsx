type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
};
const User = ({ name, age, isRegistered }: UserProps) => {
  return (
    <div style={{ border: "1px solid black", margin:"10px 0" }}>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {isRegistered ? <p>Registered User</p> : <p>Not Registered User</p>}
    </div>
  );
};

export default User;
