import React, { useState } from "react";

const form1 = {
	align: 'center',
    margin: 'auto',
    padding: '20px',
    border: '1px solid black',
	background: 'lightblue',
    width: '250px',
    display: 'block'
};
const loginbutton = {
	align: 'center',
    margin: 'auto',
    padding: '2px',
    border: '1px solid black',
	background: 'white',
    width: '100px',
    display: 'block'
};

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }
  return (
  <form style={form1} onSubmit={handleSubmit} >
      <div>
	  <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="Enter Username"
        onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password">Password : </label>
        <input
         type="password"
         value={password}
         placeholder="Enter Password"
         onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <button style={loginbutton}  type="submit"> Login </button> 
    </form>
  );
};

export default App;