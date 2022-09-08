import React, { useState } from "react";
import './Form.css';

const Form = () => {
   
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const [newEntry,setNewEntry] = useState([]);

    const submitForm = (e) =>
    {
        e.preventDefault();
        const newEntry = { fname : name , email : email , psw : password}
        
        setNewEntry([newEntry]);

    }

   return(
   <>
    <form onSubmit={submitForm}>
    <div className="loginform">
        <div>
            <label className="name">UserName : </label>
            <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label className="email"> Email : </label>
            <input type="email" placeholder="enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label className="password">PassWord : </label>
            <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        </div>
        <button type="submit" > Login </button>
    </div><br/><br/>
    </form>
    
    {
        newEntry.map((element) => {
            return(
                <>
                <table>
                <thead>
                   <th>Username</th>
                   <th>Email</th>
                   <th>PassWord</th>
                </thead>
                <tbody>
                   <tr>
                      <td>{element.fname}</td>
                      <td>{element.email}</td>
                      <td>{element.psw}</td>
                   </tr>
                </tbody>
                </table>
                </>
            )
        })
    }
   </>
   );
}

export default Form;