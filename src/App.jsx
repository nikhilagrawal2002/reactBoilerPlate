import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("")
  const [error, seterror] = useState(false)

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username)
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" name="username" placeholder="username" 
        onChange={(e)=>{setusername(e.target.value)}} 
        value={username} 
        onInput={(e)=> e.target.value.length<5 ? seterror(true):seterror(false)}/>

        <button type="submit" disabled={error}>Submit</button>

        {error && <p style={{color:"red"}}>Username should be at least 5 characters long</p>} 
      </form>
    </div>
  );
};

export default App;
