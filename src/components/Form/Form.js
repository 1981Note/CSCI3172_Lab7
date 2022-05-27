import React, {useEffect, useState} from 'react';
import Profile from '../Profile/Profile'

function Form() {
  const [firstNameInputValue, setFirstName] = useState("");
  const [lastNameInputValue, setLastName] = useState("");

  const [emailInputValue, setEmail] = useState("");
  const [passwordInputValue, setPassword] = useState("");

  const [seasonInputValue, setSeason] = useState("");

  const [errorMessage, setErrorMessage] = useState([]);
  const [isUserValidated, setUserValidated] = useState(false);

  const handleSubmit = (firstName, lastName, email, password) => {
    const allowAlphabetsRegex = new RegExp(/^[A-Za-z]+$/);

    const emailRegex = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/);

    const errors = [];

    if (!allowAlphabetsRegex.test(firstName)){
        errors.push("Invalid First Name");
    }

    if (!allowAlphabetsRegex.test(lastName)){
        errors.push("Invalid Last Name");
    }

    if (!emailRegex.test(email)){
        errors.push("Invalid email");
    }

    if (!passwordRegex.test(password)){
        errors.push("Invalid password");
    }

    if (errors.length === 0){
      setUserValidated(true);
    }else {
      setErrorMessage(errors);
    }
  }

  return (
    !isUserValidated ? (
        <div className="App">
        <input type="text" 
            placeholder="First Name" 
            style={{marginTop: "24px"}}
            onChange={(event) => setFirstName(event.target.value)}/>

        <input type="text" 
            placeholder="Last Name" 
            style={{marginTop: "24px"}}
            onChange={(event) => setLastName(event.target.value)}/>

        <input type="text" 
            placeholder="email" 
            style={{marginTop: "24px"}}
            onChange={(event) => setEmail(event.target.value)}/>

        <input type="password" 
            placeholder="password" 
            style={{marginTop: "24px"}}
            onChange={(event) => setPassword(event.target.value)}/>

        <label for="season">Favorite Season</label>
    
        <select onClick={(event) => setSeason(event.target.value)}>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
        </select>

        <button onClick={() => handleSubmit(firstNameInputValue, lastNameInputValue, emailInputValue, passwordInputValue, seasonInputValue)}>Submit</button>
            <div>
                {
                errorMessage.map(errorMessage => (
                    <p>{errorMessage}</p>
                ))
                }
            </div>
        </div>
     ) : (
        <Profile firstName = {firstNameInputValue} lastName = {lastNameInputValue} email = {emailInputValue} password = {passwordInputValue} season = {seasonInputValue}/>
     )
    
  );
}

export default Form;
