import Button from "./components/Button";
import DataFetch from "./components/DataFetch";
import Post from "./components/Post";
import StyleProps from "./components/StyleProps";
import TypingEvents from "./components/TypingEvents";
import TypingFormEvent from "./components/TypingFormEvent";
import User from "./components/User";
import UserDefinedTypes from "./components/UserDefinedTypes";
import UserDemo from "./components/UserDemo";
import UseReducerType from "./components/UseReducerType";
import UseStateHooksProps from "./components/UseStateHooksProps";

const user1 = {
  name: "Shovan Bhattacharjee",
  age: 24,
  isRegistered: true,
};
const user2 = {
  name: "Jogindar Bhattacharjee",
  age: 29,
  isRegistered: false,
};
const users = [
  {
    id:1,
    name: "Shovan Bhattacharjee",
    email: "shovan@gmail.com",
    age: 26,
  },
  {
    id:2,
    name: "Jogindar Bhattacharjee",
    email: "jogindar@gmail.com",
    age: 29,
  },
  {
    id:3,
    name: "Jagannath Bhattacharjee",
    email: "jagannath@gmail.com",
    age: 37,
  },
  {
    id:4,
    name: "Himanshu Bhattacharjee",
    email: "himu2010@gmail.com",
    age: 27,
  }
]
function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textDecoration: "underline" }}>User Management</h1>
        <User name="Shovan Bhattacharjee" age={24} isRegistered={true} />
        <User name="Jagannath Bhattacharjee" age={37} isRegistered={false} />
        <h1 style={{ textDecoration: "underline" }}>UserDefinedTypes</h1>
        <UserDefinedTypes user={user1} lang={["Bangla", "English"]} />
        <UserDefinedTypes user={user2} lang={["France", "Japanese"]} />
        <h1 style={{ textDecoration: "underline" }}>UserDemo</h1>
        <UserDemo users={users}></UserDemo>
        <h1 style={{ textDecoration: "underline" }}>Children Props</h1>
        <Button> Click Me </Button>
        <Post></Post>
        <h1 style={{ textDecoration: "underline" }}>Union types (Data Fetch)</h1>
        <DataFetch status="error" />
        <h1 style={{ textDecoration: "underline" }}>Style Props</h1>
        <StyleProps styleProps = {{color: "yellow", border: "1px solid black", margin:"10px 0", backgroundColor: "darkolivegreen"}}/>
        <h1 style={{ textDecoration: "underline" }}>Use State Types</h1>
        <UseStateHooksProps/>
        <h1 style={{ textDecoration: "underline" }}>Typing Events</h1>
        <TypingEvents />
        <h1 style={{ textDecoration: "underline" }}>Typing Form Event</h1>
        <TypingFormEvent />
        <h1 style={{ textDecoration: "underline" }}>Use Reducer Hook Types</h1>
        <UseReducerType />
      </div>
    </>
  );
}

export default App;
