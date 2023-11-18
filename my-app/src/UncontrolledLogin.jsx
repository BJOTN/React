import { useState } from "react"
import Welcome from "./Welcome"

function UncontrolledLogin() {
    const handleSubmit = (event) => {
      event.preventDefault();

      const username = event.target.elements.username.value;
      const password = event.target.elements.password.value;
  
      console.log("Username:", username);
      console.log("Password:", password);

      event.target.reset();
    };
  
    return (
      <div>
        <h2 className="bg-blue-500">Uncontrolled Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default UncontrolledLogin;