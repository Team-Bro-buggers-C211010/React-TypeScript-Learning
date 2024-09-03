// User Defined Types -> object, array, tuple, enum, union, any, unknown, never, void, null, undefined
type UserProps = {
  lang: string[];
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
  };
};
const UserDefinedTypes = ({ user, lang }: UserProps) => {
  return (
    <div style={{ border: "1px solid black", margin:"10px 0" }}>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      {user.isRegistered ? <p>Registered User</p> : <p>Not Registered User</p>}
      <p>
        Speaks:{" "}
        {lang.map((singLang, idx) => (
          <span key={idx}>{singLang} </span>
        ))}
      </p>
    </div>
  );
};

export default UserDefinedTypes;
