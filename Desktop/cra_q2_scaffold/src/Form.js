// Complete the Form Component and export it
// import React from "react";

const Form = () => (
  <>
    <div>
      <form onSubmit={handleSubmit}>{/* Create a h3, 2 inputs and 1 button here */}
      <h3>LoginPage</h3>
      <label htmlFor="name"></label>
      <input placeholder="YourName" required></input>
      <br />
      <br />
      <label htmlFor="email"></label>
      <input placeholder="xyz@pqr.com" required></input>
      <br />
      <br />
      <button>Login</button>
      </form>

    </div>
  </>
);

const handleSubmit = (event) => {
  event.preventDefault();
} 
export default Form; 