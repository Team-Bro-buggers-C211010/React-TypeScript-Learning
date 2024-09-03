import { useReducer } from "react";

const Increment = "Increment";
const Decrement = "Decrement";
const Reset = "Reset";

const initialState = {
  count: 0,
};

type ActionType =
  | { type: "Increment" }
  | { type: "Decrement" }
  | { type: "Reset" };

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case Increment:
      return { count: state.count + 1 };
    case Decrement:
      return { count: state.count - 1 };
    case Reset:
      return { count: 0 };
    default:
      throw new Error();
  }
};
const UseReducerType = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: Increment })}>Increment</button>
      <button onClick={() => dispatch({ type: Decrement })}>Decrement</button>
      <button onClick={() => dispatch({ type: Reset })}>Reset</button>
    </div>
  );
};

export default UseReducerType;
