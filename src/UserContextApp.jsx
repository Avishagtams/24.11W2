import { createContext, useContext } from "react";

const UserContext = createContext();

function UserName() {
  const name = useContext(UserContext);
  return <p>User name: {name}</p>;
}

function UserGreeting() {
  const name = useContext(UserContext);
  return <p>Hello {name}! </p>;
}

function UserProfile() {
  return (
    <div>
      <h4>User Profile</h4>
      <UserName />
      <UserGreeting />   
    </div>
  );
}

export function UserContextApp() {
  const name = "Alice";

  return (
    <UserContext.Provider value={name}>
      <h3>Part 1 – User Name Context</h3>
      <UserProfile />
    </UserContext.Provider>
  );
}