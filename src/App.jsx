import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("")
  const [error, seterror] = useState(false)
  const [gender, setgender] = useState("male")

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username,gender)
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" name="username" placeholder="username" 
        onChange={(e)=>{setusername(e.target.value)}} 
        value={username} 
        onInput={(e)=> e.target.value.length<5 ? seterror(true):seterror(false)}/>

        <button type="submit" disabled={error}>Submit</button> <br /><br />

        <input type="radio" defaultValue="male" name="gender" checked={gender==="male"?true:false} onChange={(e)=> setgender(e.target.value)}/> Male <br /><br />
        <input type="radio" defaultValue="female" name="gender" checked={gender==="female"?true:false} onChange={(e)=> setgender(e.target.value)}/> Female 

        {error && <p style={{color:"red"}}>Username should be at least 5 characters long</p>} 
      </form>
    </div>
  );
};

export default App;
